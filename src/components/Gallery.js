import React from "react";
import "../styles/Gallery.css"
import arrowPrevious from "../assets/images/arrow-left.svg"
import arrowNext from "../assets/images/arrow-right.svg"

class Gallery extends React.Component {

    state = {
        index: 0,
        length: this.props.pictures.length     
    }

    previous = () => {
        const currentIndex = this.state.index;
        if (currentIndex !== 0) {
            console.log(currentIndex)
            this.setState({index : currentIndex - 1})
        }
        else {
            this.setState({index : this.state.length - 1})
        }
    }

    next = () => {
        const currentIndex = this.state.index;
        if (currentIndex !== this.state.length - 1) {
            console.log(currentIndex)
            this.setState({index : currentIndex + 1})
        }
        else {
            this.setState({index : 0})
        }
    }

    render() {
        const pictures = this.props.pictures;
        const currentIndex = this.state.index;

        return <div className="flat-page__gallery" id="gallery">
            <div id="image-container">
                
                <img className="flat-page__gallery__img" src={pictures[currentIndex]} alt="photo du bien immobilier"/>
                <img className="flat-page__gallery__prev" src={arrowPrevious} onClick={this.previous} alt="image précédente" />
                <img className="flat-page__gallery__next" src={arrowNext} onClick={this.next} alt="image suivante" />
            </div>

        </div>
            
    }
}

export default Gallery