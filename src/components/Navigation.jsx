import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

const Navigation = ({ navItems }) => {
  return (
    <nav>
      <div id="nav-div">
        <ul className="nav-items">
          {navItems.map((link, index) => {
            return (
              <li key={`${link.title}-${index}`}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.array,
};

export default Navigation;
