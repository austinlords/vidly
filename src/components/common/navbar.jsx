import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ brand, links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/movies">
        {brand}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {links.map(link => (
            <NavLink className="nav-item nav-link" key={link} to={"/" + link}>
              {link}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
