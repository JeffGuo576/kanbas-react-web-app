import React from "react";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { faCircleCheck, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"
import { setAssignment } from "../assignmentReducer";
import { useSelector, useDispatch } from "react-redux";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  let assignment = db.assignments.find((a) => a._id === assignmentId);
  if (assignment === undefined) {
    assignment = { assignment:"New Assignment123" }
  }
  const navigate = useNavigate();
  const handleSave = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="text-end">
         <FontAwesomeIcon icon={faCircleCheck} color="green"></FontAwesomeIcon><span className="published">Published</span>
          <button className="ellipse">  <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></button>
      </div>
      <hr/>
      <label for="aName">Assignment Name</label>
      <input className="form-control" id="aName"
       value={assignment.assignment}/>
      <br/>
      <textarea className="form-control" placeholder="Assignment Description"></textarea>
      <br/>
      <label for="aPoints" >Points</label>
      <input className="form-control" id="aPoints" type="number" min="0" max="100" value={assignment.point} style={{ width:"50%" }}/>
      <br/>
      <label for="aAssign" >Assign</label>
      <input className="form-control" id="aAssign" type="number" min="0" max="100" value={assignment.point} style={{ width:"50%" }}/>
      <br/>
      <div className="text-end">
      <Link
        className="btn btn-light"
        to={`/Kanbas/Courses/${courseId}/Assignments`}
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger">
        Save
      </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;