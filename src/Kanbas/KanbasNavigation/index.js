import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faArrowRightFromBracket, faCircleQuestion, faChalkboard
 } from '@fortawesome/free-solid-svg-icons'
import '../index.css';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [faUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faChalkboard, faArrowRightFromBracket, faCircleQuestion]
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block col-2 col-lg-2 col-xl-2">
    <div className="kanbas-container">
    <div className="wd-kanbas-navigation list-group">
      <Link
        to={'/Kanbas/Dashboard'}>
      <li className="list-group-item">
       <img src="/images/NortheasternLogo.png" alt="" className="logo"/>
      </li>
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          <FontAwesomeIcon icon={icons[index]}
           color="red"/> <br/>
          {link}
        </Link>
      ))}
    </div>
    </div>
    </div>
  );
}
export default KanbasNavigation;