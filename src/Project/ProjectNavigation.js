import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectNavigation(){
  const links = ["Home", "Search", "Signin", "Signup", "Account"];
  const { pathname } = useLocation();
  return(
  <div className="d-none d-md-block col-2 col-lg-2 col-xl-2">
        <div className="list-group" style={{width: "100px"}}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={`/Project/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}>
                {link}
              </Link>
            ))}
      </div>
  </div>
  )
}

export default ProjectNavigation