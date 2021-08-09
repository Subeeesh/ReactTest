import React from "react";
import { nav, NavDropdown } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { useHistory } from "react-router";
import "./Nav.css";

// import AdminLogin from './components/AdminLogin';
// import EmployeeLogin from './components/EmployeeLogin';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function NavbarComp() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-dark bg-success">
          <a className="navbar-brand" href="/">
            Test
          </a>

          <div class="dropdown">
            <button class="dropbtn">Login</button>
            <div class="dropdown-content">
              <a href="#">Admin Login</a>
              <a href="#">Employee Login</a>
              <a href="#">Register</a>
            </div>
          </div>

          <ul></ul>
          <div></div>
        </nav>
      </div>
    </Router>
  );
}
