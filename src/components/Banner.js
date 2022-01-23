import React from "react";


import "../styles/Banner.css"

class Banner extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            banner : props.image,
        }
    }

    render() {
        return <div id="banner-container">
            <img className="banner" src={this.props.image} alt="banner" />
            {this.props.title && <h2 className="title">Chez vous, partout et ailleurs</h2>}
        </div>
    }
}

export default Banner