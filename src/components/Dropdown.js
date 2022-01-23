import React from "react";
import chevronDown from "../assets/images/Vector-down.svg"
import chevronUp from "../assets/images/Vector.png"
import "../styles/Dropdown.css"
import EquipmentList from "./Flat-equipment-list";
import FlatDescription from "./Flat-description";

class Dropdown extends React.Component {

    state = {
        show: false
    }

    toggleDropdown = () => {
        this.setState({
            show: !this.state.show
        })
        
    }

    render() {
        return <div id={this.props.title}>
            <div className="dropdown" data-hidden="true"  onClick={this.toggleDropdown}>
                <span className="dropdown__title">{this.props.title}</span>
                <img className="dropdown__chevron-down" src={this.state.show ? chevronUp : chevronDown} alt="dérouler les informations" />
            </div>
            {this.props.description && this.state.show ? <FlatDescription description={this.props.content}/>: null}
            {this.props.equipments && this.state.show ? <EquipmentList equipments={this.props.content}/> : null}
        </div>
           
    }
}

export default Dropdown