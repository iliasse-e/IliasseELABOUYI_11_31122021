import React from "react";
import "../styles/Footer.css"
import Logo from "./Logo";

class Footer extends React.Component {

    render() {
        return <footer id="footer">
            <Logo container="footer" />
            <p id="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
            
    }
}

export default Footer