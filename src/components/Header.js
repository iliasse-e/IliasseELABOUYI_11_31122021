import React from "react";
import "../styles/Header.css"
import Logo from "./Logo";
import Nav from "./Navigation";

class Header extends React.Component {

    render() {
        return <header id="header">
            <Logo />
            <Nav />
        </header>
            
    }
}

export default Header