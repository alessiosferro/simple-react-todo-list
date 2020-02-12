import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render = () => (
    <header className="container__header">
      <h1>{this.props.title}</h1>
      <nav style={{ margin: "1rem 0" }}>
        <NavLink
          exact
          className="header-nav__link"
          activeClassName="activeLink"
          to="/todo-list-app"
        >
          Home
        </NavLink>
        <NavLink
          className="header-nav__link"
          activeClassName="activeLink"
          to="/todo-list-app/about"
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
