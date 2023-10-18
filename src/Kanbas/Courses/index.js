import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import '../index.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faGauge, faBook, faCalendarDays, faInbox, faClock, faVideo, faArrowRightFromBracket, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const dropDownItems = [{faGauge},{faBook},{faCalendarDays},{faInbox},{faClock},{faVideo},{faArrowRightFromBracket},{faCircleQuestion}]
  const dropDownItemNames = ["Dashboard", "Account", "Courses", "Calendar", "Inbox", "Studio", "Commons", "Help"]
  return (
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td class="breadcrumb-title d-none d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" colspan="3">
              <Breadcrumb separator={<ChevronRightIcon></ChevronRightIcon>}>
                <BreadcrumbLink>
                  <FontAwesomeIcon icon={faBars} color="#ee3a3a"> </FontAwesomeIcon>
                </BreadcrumbLink>
              <BreadcrumbItem>
                <BreadcrumbLink class="breadcrumb-info" href="#">{course.number}.{course._id}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage href="#">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            <hr/>
            </td>
            <td className="md-dropdown d-md-table-cell d-xl-none d-lg-none">
                <div className="d-flex justify-content-between">
                    <a className="btn btn-black d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faBars} color="white"></FontAwesomeIcon>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item text-end" href="/"></a><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></li>
                      {dropDownItems.map((item, index) => (
                        <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={item}></FontAwesomeIcon></a>{dropDownItemNames[index]}</li>
                      ))}
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
                <Route path="Grades" element={<h1>Grades</h1>}></Route>
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
export default Courses;

