import React from "react";
import "../styles/Flat-description.css"

class FlatDescription extends React.Component {

    render() {
        return <div className="flat__description">
            <p className="flat__description-content">{this.props.description}</p>
        </div>
    }
}

export default FlatDescription