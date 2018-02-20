import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Home/Search
        </a>
        <a href="/saves" className="navbar-brand">
          Saves
        </a>
      </div>
    </div>
  </nav>;

export default Nav;