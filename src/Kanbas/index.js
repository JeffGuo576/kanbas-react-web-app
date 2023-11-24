import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  console.log(API_BASE);

  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    }

   const deleteCourse = async (course) => {
    try {
     await axios.delete(`${URL}/${course._id}`);
     setCourses(courses.filter((c) => c._id !== course._id));
    } catch (error) {
     console.log(error);
    }
   };

   const findAllCourses = async () => {
     const response = await axios.get(URL);
     setCourses(response.data);
   };
   
   const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };


  
   useEffect(() => {
     findAllCourses();
   }, []);


   return (
      <Provider store={store}>
         <div>
            <Nav/>
            <table width="100%" height="100%">
               <tbody>
                  <tr>
                     <td className="d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" valign="top" width="83px">
                        <KanbasNavigation />
                     </td>
                     <td valign="top">
                     <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path ="/signin" element={<Signin />} />
                        <Route path="Dashboard" element={<Dashboard 
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}/>
                                    } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
                     </Routes>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </Provider>
   );
 }
 export default Kanbas;