import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css"

class Error extends React.Component {

    render() {
        return <div id="error">
            <h1 id="error__title">404</h1>
            <p id="error__description">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link" to="/">
            <p id="error__linktomain">Retour sur la page d'accueil</p>
          </Link>
        </div>
    }
}

export default Error