import { Link } from "react-router-dom";
import db from "../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilePen} from '@fortawesome/free-solid-svg-icons'
import '../index.css';

function CourseCard({ course }) {
  return (
    <div className="col" style={{ width: "290px" }}>
      <a href={`../#/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="card h-100">
          <img src="/images/blue.jpeg" className="card-img-top" alt={course.name} />
          <div className="card-body">
            <h5 className="card-title">{course.number} {course.name} <br/> {course.startDate} {course.endDate}</h5>
            <p className="card-text">
              {course._id} Fall 2023 Semester Full Term
              <br />
              <button className="course">
                <FontAwesomeIcon icon={faFilePen}/> 
              </button>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}


function Dashboard() {
  const courses = db.courses;
  return (
    <div className = "dashboard-container">
      <h1>Dashboard</h1>
      <hr></hr>
      <h3>Published Courses ({courses.length})</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
export default Dashboard;