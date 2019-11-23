import React, { Component } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Logo />
        <Link className="navbar-brand" to="/">
          HR App
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
            <NavLink className="nav-item nav-link" to="/employees">
              Employees
            </NavLink>
            <NavLink className="nav-item nav-link" to="/employees/create">
              Create Employee
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
