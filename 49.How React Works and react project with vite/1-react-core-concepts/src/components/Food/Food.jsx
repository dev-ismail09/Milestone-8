import React from 'react';
import './Food.css'

const Food = (props) => {
    console.log(props)
    return (
        <div className='food-style'>
            <img src={props.photo} alt=""/>
            <h1>{props.foodName}</h1>
            <h2>{props.area}</h2>
            <h2>{props.str? props.str: "No Mention"}</h2>
        </div>
    );
};

export default Food;