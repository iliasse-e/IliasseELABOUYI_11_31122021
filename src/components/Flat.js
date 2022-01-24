import React from "react";
import "../styles/Flat.css"
import { Link, NavLink } from "react-router-dom"
import FlatPage from "../pages/Flat";

class Flat extends React.Component {

    render() {
        return <div className="flat">
            <Link className="flat-link link" to={"/flat/" + this.props.flat.id}>
                <img className="flat__image overlay" src={this.props.source} alt=""/>
                <div className="flat__layer"></div>
                <p className="flat__title">{this.props.title}</p>
            </Link>
        </div>
    }
}

export default Flat