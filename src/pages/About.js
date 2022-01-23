import React from "react";
import Banner from "../components/Banner";
import "../styles/About.css"
import banner2 from "../assets/images/banner-2.png";
import aboutData from "../datas/about-data";
import Dropdown from "../components/Dropdown";

class AboutPage extends React.Component {
    
    render() {
        const contents = aboutData;
        return <>
            <Banner image={banner2}/>
            <div id="about__dropdown-list">
                {contents.map((content) =>
                    <Dropdown description title={content.title} content={content.description} className={content.title} key={content.title}/>
                )}
            </div>
        </>
    }
}

export default AboutPage