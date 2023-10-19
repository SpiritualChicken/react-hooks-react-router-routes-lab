import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" />
      <NavLink to="/directors" />
      <NavLink to="/actors" /> 
    </nav>
    );
};

export default NavBar;
