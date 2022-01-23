import React from "react";
import "../styles/Rating.css";
import starFull from "../assets/images/star-full.svg"
import starEmpty from "../assets/images/star-empty.svg"
import Star from "./Star";

class Rating extends React.Component {
    
    render() {
        
        // function returns an array of 5 rating string states to display
        const addStar = () => {
            
            const stars = [];
            const totalStars = 5;
            const flatRating = this.props.rating;
            const emptyStars = totalStars - flatRating;

            for (let i = 0; i < flatRating; i++) {
                stars.push("fill")
            }
            
            for (let i = 0; i < emptyStars; i++) {
                stars.push("empty")
            }

            return stars
        }


        return <div id="rating">
           {addStar().map((star) =>
                (star === "fill" ? <Star star/> : <Star />)
            )}
        </div>
    }
}

export default Rating