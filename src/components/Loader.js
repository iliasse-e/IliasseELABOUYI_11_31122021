import React from "react";
import "../styles/Loader.css"
import Logo from "./Logo";

class Loader extends React.Component {

    render() {
        return <div id="loader">
            <div id="loader-layer">
                <Logo container="footer"/>
            </div>
        </div>
            
    }
}

export default Loader