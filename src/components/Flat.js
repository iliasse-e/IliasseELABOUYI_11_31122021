import React from "react";
import "../styles/Flat.css"

class Flat extends React.Component {

    render() {
        return <div className="flat">
            <img className="flat__image overlay" src={this.props.source} alt=""/>
            <div className="flat__layer"></div>
            <p className="flat__title">{this.props.title}</p>
        </div>
    }
}

export default Flat