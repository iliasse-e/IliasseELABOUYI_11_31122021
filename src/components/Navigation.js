import React from "react";
import "../styles/Header.css"

class Nav extends React.Component {

    render() {
        return <nav id="nav">
          <a data-active="true" href="#Accueil">Accueil</a>
          <a href="#Apropos">À propos</a>
      </nav>
            
    }
}

export default Nav

