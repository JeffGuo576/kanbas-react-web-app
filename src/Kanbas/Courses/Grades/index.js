import db from "../../Database";
import { useParams } from "react-router-dom";
import { faGear, faFileImport, faFileExport, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
      <div className="text-end">
        <button className="btn-gray"><FontAwesomeIcon icon={faFileImport}> </FontAwesomeIcon>Import</button>
        <button className="btn-gray"><FontAwesomeIcon icon={faFileExport}> </FontAwesomeIcon>Export</button>
        <button className="btn-gray"><FontAwesomeIcon icon={faGear}> </FontAwesomeIcon></button>
    </div>
    <div className="row">
        <div className="col">
            <h3>Student Names</h3>
            <input className="form-control" type="text" placeholder="Search Students" title="Type the username of students for filter"/>
        </div>
        <div className="col">
            <h3>Assignment Names</h3>
            <input className="form-control" type="text" placeholder="Search Assignments"/>
        </div>
    </div>
    <button className="btn-gray"><FontAwesomeIcon icon={faFilter}> </FontAwesomeIcon>Apply Filter</button>
<div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.assignment}</th>))}
          </thead>

          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

