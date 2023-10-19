import db from "../../Database";
import { useParams } from "react-router";
import { faEllipsisV, faCircleCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';
import "../../index.css"

function ModuleList() {
    const { courseId } = useParams();
    const dbmodules = db.modules;
    const modules = dbmodules.filter((module) => module.course === courseId);

    return (
        <div>
            <div className="module-container">
                <div className="d-flex justify-content-end align-items-center">
                    <button type="topbutton" className="btn btn-light">Collapse All</button>
                    <button type="topbutton" className="btn btn-light">View Progress</button>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        <FontAwesomeIcon color="green" icon={faCircleCheck}></FontAwesomeIcon> Publish All
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Publish All</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Publish All Modules and Items</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Publish All Modules only</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Publish All</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button type="topbutton" className="btn btn-danger">Module</button>
                    <button type="topbutton" className="btn btn-light"><FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon></button>
                </div>
                <hr/>
            <div>
                <ul className="wd-week-list list-group">
                    {modules.map((module, index) => (
                        <li className="modules-margin">
                            <li className="list-group-item active" key={index}>
                                {module.name}
                                <FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon>
                                <FontAwesomeIcon color="gray" icon={faPlus} className="floatRight"></FontAwesomeIcon>
                                <FontAwesomeIcon color="green" icon={faCircleCheck} className="floatRight"></FontAwesomeIcon>
                            </li>
                            <li className="list-group-item second">
                                {module.description}
                            </li>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default ModuleList;
