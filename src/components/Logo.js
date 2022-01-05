import React from "react";
import "../styles/Logo.css"
import logo from "../assets/images/LOGO.svg"

class Logo extends React.Component {

    render() {
        return <img id="logo" src={logo} />
    }
}

export default Logo