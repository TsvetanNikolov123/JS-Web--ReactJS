import React from "react";
import './House.css';

const House = (props) => {
    return (
        <div className="House" onMouseEnter={()=> this.props.houseHoverEvent(this.props.id)}>
            <img src={props.imageUrl} alt="House Image"/>
        </div>)
};

export default House;