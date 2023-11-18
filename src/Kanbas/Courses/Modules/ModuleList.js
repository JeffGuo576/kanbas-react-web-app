import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { faEllipsisV, faSquareCheck, faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from 'react-bootstrap/Dropdown';
import "../../index.css"
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
          dispatch(addModule(module));
        });
      };
    const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
        dispatch(deleteModule(moduleId));
    });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    
    
    useEffect(() => {
        client.findModulesForCourse(courseId)
          .then((modules) =>
            dispatch(setModules(modules))
        );
      }, [courseId]);
    
    
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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
                 <li className="list-group-item">
                    <div>
                    <button className="btn btn-success floatRight"
                    onClick={handleAddModule}>
                    Add
                    </button>
                    <button className="btn btn-primary floatRight"
                    onClick={handleUpdateModule}>
                    Update
                    </button>
                    <label for="modTitle"><b>Module Title</b></label>
                    <br/>
                    <input id="modTitle" style={{ width:"70%" }}
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))
                    }/>
                    <br/>
                    <label for="modDesc"><b>Module Description</b></label>
                    <br/>
                    <textarea id="modDesc" style={{ width:"70%" }}
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))
                    }/>
                    </div>
                </li>
            <div>
                <ul className="wd-week-list list-group">
                    {modules.filter((module) => module.course === courseId).map((module, index) => (
                        <li className="modules-margin">
                            <li className="list-group-item active" style={{ height:"60px", fontSize:"25px" }} key={index}>
                                {module.name}
                                <button className="btn btn-success floatRight"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <button className="btn btn-danger floatRight"
                                    onClick={() => handleDeleteModule(module._id)}>
                                    Delete
                                </button>
                            </li>
                            <li className="list-group-item second">
                                <div>
                                    <FontAwesomeIcon color="gray" icon={faEllipsisV} className="floatRight"></FontAwesomeIcon>
                                    <FontAwesomeIcon color="green" icon={faSquareCheck} className="floatRight"></FontAwesomeIcon>
                                    {module.description}
                                    

                                </div>
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
