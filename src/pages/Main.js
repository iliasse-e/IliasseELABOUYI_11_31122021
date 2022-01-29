import React from "react";
import Banner from "../components/Banner";
import "../styles/Footer.css"
import banner1 from "../assets/images/banner-1.png";
import FlatList from "../components/FlatList";
import Loader from "../components/Loader";

class MainPage extends React.Component {
    
    render() {
        return this.props.flats ? (<>
            <Banner title image={banner1}/>
            <FlatList list={this.props.flats}/>
        </>) : (<Loader />)
            
    }
}

export default MainPage