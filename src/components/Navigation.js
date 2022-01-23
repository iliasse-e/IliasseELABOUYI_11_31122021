import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css"

class Nav extends React.Component {

    render() {
        return <nav id="nav">
          <NavLink exact activeClassName="active" to="/">
            Accueil
          </NavLink>
          <NavLink exact activeClassName="active" to="/About">
            À propos
          </NavLink>
      </nav>
            
    }
}

export default Nav

