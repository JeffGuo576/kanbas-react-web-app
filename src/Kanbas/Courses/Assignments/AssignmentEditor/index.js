import React from "react";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { faCircleCheck, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"
function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="text-end">
         <FontAwesomeIcon icon={faCircleCheck} color="green"></FontAwesomeIcon><span className="published">Published</span>
          <button className="ellipse">  <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></button>
      </div>
      <hr/>
      <input className="form-control" defaultValue={assignment.assignment} />
      <div className="text-end">
      <hr/>
      <textarea className="form-control" placeholder="Assignment Description"></textarea>
      <br/>
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