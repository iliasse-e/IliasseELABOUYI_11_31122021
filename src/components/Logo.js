import React from "react";
import "../styles/Logo.css"
import logoHeader from "../assets/images/LOGO.svg"
import logoFooter from "../assets/images/LOGO-footer.svg"

class Logo extends React.Component {
   
    render() {
        if (this.props.container === "footer") {
         return <img className="logo-footer" src={logoFooter} alt="logo"/> 
        }    
        else { 
         return <img className="logo-header" src={logoHeader} alt="logo"/> 
        }
    }
}

export default Logo