import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>pirineXus</h1>
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "selected" : "")}> Home </NavLink>
        <NavLink to="/tracks" className={({ isActive }) => (isActive ? "selected" : "")}>Tracks</NavLink>
        <NavLink to="/bikers" className={({ isActive }) => (isActive ? "selected" : "")}>Bikers</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
