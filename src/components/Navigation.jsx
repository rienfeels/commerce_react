import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ navItems }) => {
  return (
    <nav>
      <ul>
        {navItems.map((link, index) => {
          return (
            <li key={`${link.title}-${index}`}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.array,
};

export default Navigation;
