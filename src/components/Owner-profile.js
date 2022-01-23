import React from "react";
import "../styles/Owner-profile.css";
import Rating from "./Rating";

class Profile extends React.Component {
    
    render() {
        const host = this.props.flat.host
        return <div id="profile">
            <div id="profile__header">
                <p id="owner-name">{host.name}</p>
                <img id="owner-profile-picture" src={host.picture} alt="photo de profil propriétaire"/>
            </div>
            <Rating rating={this.props.flat.rating}/>
        </div>
    }
}

export default Profile