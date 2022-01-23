import React from "react";
import "../styles/Rating.css";
import starFull from "../assets/images/star-full.svg"
import starEmpty from "../assets/images/star-empty.svg"

class Star extends React.Component {
    
    render() {
                
        return  <img src={this.props.star ? starFull : starEmpty} alt="" />

    }
}

export default Star