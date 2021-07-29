import react from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/candy-bar">
        Candy Bar
      </NavLink>
      <NavLink exact to="/potato-chips">
        Potato Chip
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>
    </nav>
  );
}

export default NavBar;
