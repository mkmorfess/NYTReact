import React from "react";
import { Link } from "react-router-dom"

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Home/Search
        </Link>
        <Link to="/saves" className="navbar-brand">
          Saves
        </Link>
      </div>
    </div>
  </nav>;

export default Nav;