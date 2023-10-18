import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faN, faUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faArrowRightFromBracket, faCircleQuestion, faChalkboard
 } from '@fortawesome/free-solid-svg-icons'
import '../index.css';

function KanbasNavigation() {
  const links = [" ","Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [faN, faUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faChalkboard, faArrowRightFromBracket, faCircleQuestion]
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group d-none d-md-block col-2 col-lg-2 col-xl-2">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          <FontAwesomeIcon icon={icons[index]}
           className={icons[index] === faN ? "bigger-icon" : ""}
           color="red"/> <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;