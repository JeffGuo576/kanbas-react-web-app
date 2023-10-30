import { React, useState } from "react";
import db from "../Database";
import '../index.css';


function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div className = "dashboard-container">
      <h1>Dashboard</h1>
      <hr></hr>
      <h3>Published Courses ({courses.length})</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
            <div className="col" style={{ width: "290px" }}>
            <a href={`../#/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card h-100">
                <img src="/images/blue.jpeg" className="card-img-top" alt={course.name} />
                <div className="card-body">
                  <h5 className="card-title">{course.number} {course.name} <br/> {course.startDate} {course.endDate}</h5>
                  <p className="card-text">
                    {course._id} Fall 2023 Semester Full Term
                    <br />
                    <button className="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div className="col" style={{ width: "290px" }}>
        <label for="courseName"> <b>Course Name</b></label>
        <input value={course.name} className="form-control" id="courseName"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <label for="courseNum"><b>Course Number</b></label>
        <input value={course.number} className="form-control" id="courseNum"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
         <label for="courseStart"><b>Course Start Date</b></label>
        <input value={course.startDate} className="form-control" type="date" id ="courseStart"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <label for="courseEnd"><b>Course End Date</b></label>
        <input value={course.endDate} className="form-control" type="date" id ="courseEnd"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button className="btn btn-success" onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-primary" onClick={updateCourse} >
        Update
        </button>  
        </div>
      </div>
    </div>
  );
}
export default Dashboard;