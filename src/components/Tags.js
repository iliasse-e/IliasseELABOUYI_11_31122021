import React from "react";
import "../styles/Tags.css"

class Tags extends React.Component {

    render() {
        const tags = this.props.tags;

        return <div className="tag-container">
                    {tags.map((tag) =>
                        <div id={tag} key={tag} className="tag">
                            <span className="tag__content">{tag}</span>
                        </div>
                    )}
                    
            </div>
    }
}

export default Tags