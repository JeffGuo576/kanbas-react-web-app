import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCircleCheck, faCrosshairs, faFileImport, faChartSimple, faBullhorn, faBell, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './index.css'
function Status() {
  return (
    <div className="float-end d-none d-xxl-table-cell d-xl-table-cell d-lg-none" style={{ width: '300px' }}>
      <div className="course container">
        <span>Course Status</span>
        <br/>
        <button className="topbutton">
          <FontAwesomeIcon icon={faBan} /> Unpublish
        </button>
        <button className="topbutton">
          <FontAwesomeIcon icon={faCircleCheck} color="green"/> Published
        </button>
        <ul className="wd-status list-group">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faFileImport} />
            <a href="#">Import Existing Content</a>
          </li>
          <li class="list-group-item">
          <FontAwesomeIcon icon={faFileImport} />
            <a href="#">Import From Commons</a>
            </li>
            <li class="list-group-item">
            <FontAwesomeIcon icon={faCrosshairs} />
                <a href="#">Choose Home Page</a>
            </li>
            <li class="list-group-item">
            <FontAwesomeIcon icon={faChartSimple} />
                <a href="#">View Course Stream</a>
            </li>
            <li class="list-group-item">
            <FontAwesomeIcon icon={faBullhorn} />
                <a href="#">New Announcements</a>
            </li>
            <li class="list-group-item">
            <FontAwesomeIcon icon={faChartSimple} />
                <a href="#">New Analytics</a>
            </li>
            <li class="list-group-item">
            <FontAwesomeIcon icon={faBell} />
                <a href="#">View Course Notifications</a>
            </li>
        </ul>
      </div>

      <div className="coming container">
        <span>Coming Up</span>
        <a className="float-end" href="#" style={{ color: 'red', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faCalendar} color="black" /> View Calendar
        </a>
        <ul className="coming list-group">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faCalendar} />
            <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon icon={faCalendar} />
            <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon icon={faCalendar} />
            <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Status;
