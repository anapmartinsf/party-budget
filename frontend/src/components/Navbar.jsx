import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <NavLink to="/">Minhas festas</NavLink>
        </li>
        <li>
          <NavLink to="/party/new" className="btn">
            Criar festa
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
