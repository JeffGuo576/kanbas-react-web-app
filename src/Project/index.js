import Signin from "../Kanbas/users/signin";
import UserTable from "../Kanbas/users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import ProjectNavigation from "./ProjectNavigation";
import Account from "../Kanbas/users/account";
import Signup from "../Kanbas/users/signup";
function Project() {
  return (
    <div>
    <Nav/>
    <table width="100%" height="100%">
       <tbody>
          <tr>
             <td className="d-xxl-table-cell d-xl-table-cell d-lg-table-cell d-md-none" valign="top" width="83px">
                <ProjectNavigation />
             </td>
             <td valign="top">
             <Routes>
              <Route path="/" element={<Navigate to="/project/home" />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/account" element={<Account />} />
              <Route path="/admin/users" element={<UserTable />} />
              <Route path="/account/:id" element={<Account />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
             </td>
          </tr>
       </tbody>
    </table>
 </div>
  );
}
export default Project;