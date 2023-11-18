import db from "../../Kanbas/Database";
import { Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import '../index.css';
import { faBars, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faBook, faCalendarDays, faInbox, faClock, faVideo, faArrowRightFromBracket, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses( {courses} ) {
  const { courseId } = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const [course, setCourse] = useState({});

  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  const dropDownItems = [{faGauge},{faBook},{faCalendarDays},{faInbox},{faClock},{faVideo},{faArrowRightFromBracket},{faCircleQuestion}]
  const dropDownItemNames = ["Dashboard", "Account", "Courses", "Calendar", "Inbox", "Studio", "Commons", "Help"]
  const currentLocation = "/Kanbas/Courses/" + courseId + "/";
  const path = useLocation().pathname.toString().replace(currentLocation,"");
  return (
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td class="breadcrumb-title d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" colspan="3">
              <Breadcrumb separator={<ChevronRightIcon></ChevronRightIcon>}>
                <BreadcrumbLink>
                  <FontAwesomeIcon icon={faBars} color="red"> </FontAwesomeIcon>
                </BreadcrumbLink>
              <BreadcrumbItem>
                <BreadcrumbLink class="breadcrumb-info" href="#">{course.number}.{course._id}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage href="#">
                  <BreadcrumbLink href="#">{path}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            <hr/>
            </td>
            <td className="md-dropdown d-md-table-cell d-xl-none d-lg-none">
            <div className="d-flex justify-content-between" style={{ backgroundColor: 'black' }}>
                <a
                  className="btn btn-black d-flex justify-content-between align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ width: '45px', color: 'white' }}
                >
                  <FontAwesomeIcon icon={faBars} style={{ color: '#ee3a3a' }} />
                </a>
                <ul className="kanbas dropdown-menu" style={{ width: '100%' }}>
                  <li className="dropdown-item active">
                    <button style={{ border: 'none', backgroundColor: 'white' }}>
                      <FontAwesomeIcon icon="x" className="fa-solid" />
                    </button>
                  </li>
                  <li className="dropdown-item">
                    <a href="/Kanbas/Dashboard">
                      <FontAwesomeIcon icon="gauge" className="fa-solid" style={{ color: 'red' }} />
                      Dashboard
                    </a>
                  </li>
                </ul>
                <div className="breadcrumbforkanbas" style={{ color: 'white' }}>
                  CS4550.12631.202410 <br />
                  Home
                </div>
                <a
                  className="btn btn-black d-flex justify-content-between align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ width: '45px', color: 'white' }}
                >
                  <FontAwesomeIcon icon={faAngleDown} style={{ color: '#ffffff' }} />
                </a>
                <ul className="course dropdown-menu" style={{ width: '100%' }}>
                  <li className="dropdown-item active">
                    <button style={{ border: 'none', backgroundColor: 'white' }}>
                      <FontAwesomeIcon icon="x" className="fa-solid" />
                    </button>
                  </li>
        </ul>
      </div>
            </td>
          </tr>
          <tr>
            <td width="83px" class="d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" valign="top">
              <CourseNavigation />
            </td>
            <td className="px-5" valign="top" width="100%">
              <Routes>
                <Route path="Home" element={<Home/>}></Route>
                <Route path="Modules" element={<Modules/>}></Route>
                <Route path="Assignments" element={<Assignments/>}></Route>
                <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}></Route>
                <Route path="Grades" element={<Grades/>}></Route>
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
export default Courses;

