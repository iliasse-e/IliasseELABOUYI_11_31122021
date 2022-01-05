import React from "react";
import flats from "../datas/data";
import "../styles/FlatList.css";
import Flat from "./Flat";

class FlatList extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        console.log(flats)
    }

    render() {
        return <div className="flat-list">
            {flats.map((flat) =>
                <Flat key={flat.id} source={flat.pictures[1]} title={flat.title} />
            )}
        </div>
    }
}

export default FlatList