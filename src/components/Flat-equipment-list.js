import React from "react";
import "../styles/Flat-equipments.css"


class EquipmentList extends React.Component {

    render() {
        const equipments = this.props.equipments;
        
        return <div className="flat__equipments">
            <ul>
            {equipments.map((equipment) =>
                <li className="flat__equipments-content" key={equipment}> {equipment} </li>
            )}
            </ul>
        </div>
    }
}

export default EquipmentList