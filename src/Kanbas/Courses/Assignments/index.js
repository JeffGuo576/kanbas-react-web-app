import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { faEllipsisV, faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  const assignmentsArray = courseAssignments.filter(
    (assignment) => assignment.title === "Assignment"
  );

  const quizzesArray = courseAssignments.filter(
    (assignment) => assignment.title === "Quizzes"
  );
  
  return (
      <>
          <div className="top-buttons" alignItems="center">
            <div className="d-flex justify-content-between align-items-center">
                <input className="form-control w-25" placeholder="Search for Assignments"/>
                <div className="float-end">
                    <button type="button" className="btn btn-light px-2">Group</button>
                    <button type="button" className="btn btn-danger px-2">Assignment</button>
                    <button type="button" className="btn btn-light px-2">
                      <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <hr/>
          </div>
          <ul className="wd-week-list list-group">
        
          </ul>
      </>
  );
}
export default Assignments;

// {courseAssignments.map((assignment, index) => (
//   <li className="assignments-margin">
//         <li className="list-group-item active d-flex justify-content-between align-items-center" key={index}>
//           <div>
//             <h2>{assignment.title}</h2>
//           </div>
//           <div>
//             <button class="btn percentage">{assignment.percentage} of Total</button>
//             <button class="btn mx-2"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
//             <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
//           </div>
//         </li>
//         <Link style={{ textDecoration: 'none' }} key={assignment._id}
//          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} _hover={{ textDecoration: "none" }}>
//             <li key={assignment._id} className="list-group-item d-flex align-items-center justify-content-between">
//               <div>
//                 <h5>{assignment.assignment}</h5>
//                 {assignment.dueDate}
//                 {assignment.points}
//               </div>
//               <div>
//               <FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon>
//               <FontAwesomeIcon color="green" icon={faCircleCheck} className="floatRight"></FontAwesomeIcon>
//               </div>
//             </li>
//         </Link>
//     </li>
// ))}