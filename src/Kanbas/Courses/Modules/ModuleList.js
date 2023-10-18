import db from "../../Database";
import { useParams } from "react-router";
import { faEllipsisV, faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css"

function ModuleList() {
    const { courseId } = useParams();
    const dbmodules = db.modules;
    const modules = dbmodules.filter((module) => module.course === courseId);

    return (
        <div>
            <div className="module-container">
            <div className="text-end" alignItems="center">
                <button type="topbutton" className="btn btn-light">Collapse All</button>
                <button type="topbutton" className="btn btn-light">View Progress</button>

                <a className="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Publish All
                </a>
                <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Publish All</a></li>
                    <li><a className="dropdown-item" href="#">Publish All Modules and Items</a></li>
                    <li><a className="dropdown-item" href="#">Publish All Modules Only</a></li>
                    <li><a className="dropdown-item" href="#">Unpublish All</a></li>
                </ul>
                <button type="topbutton" className="btn btn-danger">Module</button>
                <hr/>
            </div>
            <div>
                <ul className="wd-week-list list-group">
                    {modules.map((module, index) => (
                        <li className="modules-margin">
                            <li className="list-group-item active" key={index}>
                                <h2>{module.name}</h2>
                            </li>
                            <li className="list-group-item">
                                {module.description}
                            <FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon>
                            <FontAwesomeIcon color="green" icon={faCircleCheck} className="floatRight"></FontAwesomeIcon>
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
