import React from "react";
import "../styles/FlatList.css";
import Flat from "./Flat";

class FlatList extends React.Component {
    
    render() {
        const flats = this.props.list
        return <div className="flat-list">
            {flats.map((flat) =>
                <Flat key={flat.id} source={flat.pictures[0]} title={flat.title} flat={flat} />
            )}
        </div>
    }
}

export default FlatList