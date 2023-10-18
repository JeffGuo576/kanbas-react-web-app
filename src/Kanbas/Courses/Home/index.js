import ModuleList from "../Modules/ModuleList";
import Status from "./Status";


function Home() {
  return (
    <div>
      <td width="100%" valign="top">
      <ModuleList/>
      </td>
      <td>
      <Status/>
      </td>
    </div>
  );
}
export default Home;