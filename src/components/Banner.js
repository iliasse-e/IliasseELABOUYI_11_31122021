import React from "react";


import "../styles/Banner.css"

class Banner extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            banner : props.image,
        }
        console.log(props)
        console.log(this.state)
    }
    

    render() {
        return <div>
            <img className="banner" src={this.props.image} alt="banner" />
            <h2 className="title">Chez vous, partout et ailleurs</h2>
        </div>
    }
}

export default Banner