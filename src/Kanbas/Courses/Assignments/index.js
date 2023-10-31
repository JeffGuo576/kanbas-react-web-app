import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { faEllipsisV, faPlus, faPenToSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
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

  const examArray = courseAssignments.filter(
    (assignment) => assignment.title === "Exam"
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
             <li className="list-group-item active">
                Assignment
                <div className="float-end">
                    <button className="rounded-pill">40% of Total</button>
                    <Link key={new Date().getTime().toString()}
                    to={`/Kanbas/Courses/${courseId}/Assignments/ ${new Date().getTime().toString()}`}>
                    <button className="lightgray-borderless"><FontAwesomeIcon color="gray" icon={faPlus}></FontAwesomeIcon></button>
                    </Link>
                    <button className="lightgray-borderless"><FontAwesomeIcon color="gray" icon={faEllipsisV}></FontAwesomeIcon></button>
                </div>
              </li>
            {assignmentsArray.map((assignment, index) => (
              <Link key={assignment._id}
               to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} _hover={{ textDecoration: "none" }}>
                <li className="list-group-item"> 
                  <div className="float-start">
                  <button className="edit"><FontAwesomeIcon color="green" icon={faPenToSquare} className="floatLeft"></FontAwesomeIcon></button>  
                  {assignment.assignment}
                  </div>
                  <FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon>
                  <FontAwesomeIcon color="green" icon={faSquareCheck} className="floatRight"></FontAwesomeIcon>
                  <br/>
                  <div className="light-font">
                  {assignment.dueDate}
                  {assignment.points}
                  </div>
                </li>
                </Link>
            ))}
          </ul>
          <ul className="wd-week-list list-group">
             <li className="list-group-item active">
                Quizzes
                <div className="float-end">
                    <button className="rounded-pill">10% of Total</button>
                    <Link key={new Date().getTime().toString()}
                    to={`/Kanbas/Courses/${courseId}/Assignments/ ${new Date().getTime().toString()}`}>
                    <button className="lightgray-borderless"><FontAwesomeIcon color="gray" icon={faPlus}></FontAwesomeIcon></button>
                    </Link>
                    <button className="lightgray-borderless"><FontAwesomeIcon color="gray" icon={faEllipsisV}></FontAwesomeIcon></button>
                </div>
              </li>
            {quizzesArray.map((assignment, index) => (
              <Link key={assignment._id}
               to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} _hover={{ textDecoration: "none" }}>
                <li className="list-group-item"> 
                  <div className="float-start">
                  <button className="edit"><FontAwesomeIcon color="green" icon={faPenToSquare} className="floatLeft"></FontAwesomeIcon></button>  
                  {assignment.assignment}
                  </div>
                  <FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon>
                  <FontAwesomeIcon color="green" icon={faSquareCheck} className="floatRight"></FontAwesomeIcon>
                  <br/>
                  <div className="light-font">
                  {assignment.dueDate}
                  {assignment.points}
                  </div>
                </li>
                </Link>
            ))}
          </ul>

          <ul className="wd-week-list list-group">
             <li className="list-group-item active">
                Exam
                <div className="float-end">
                    <button className="rounded-pill">10% of Total</button>
                    <Link key={new Date().getTime().toString()}
                    to={`/Kanbas/Courses/${courseId}/Assignments/ ${new Date().getTime().toString()}`}>
                    <button className="lightgray-borderless"><FontAwesomeIcon color="gray" icon={faPlus}></FontAwesomeIcon></button>
                    </Link>
                    <button className="lightgray-borderless"><FontAwesomeIcon color="gray" icon={faEllipsisV}></FontAwesomeIcon></button>
                </div>
              </li>
            {examArray.map((assignment, index) => (
              <Link key={assignment._id}
               to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} _hover={{ textDecoration: "none" }}>
                <li className="list-group-item"> 
                  <div className="float-start">
                  <button className="edit"><FontAwesomeIcon color="green" icon={faPenToSquare} className="floatLeft"></FontAwesomeIcon></button>  
                  {assignment.assignment}
                  </div>
                  <FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon>
                  <FontAwesomeIcon color="green" icon={faSquareCheck} className="floatRight"></FontAwesomeIcon>
                  <br/>
                  <div className="light-font">
                  {assignment.dueDate}
                  {assignment.points}
                  </div>
                </li>
                </Link>
            ))}
          </ul>
      </>
  );
}
export default Assignments;