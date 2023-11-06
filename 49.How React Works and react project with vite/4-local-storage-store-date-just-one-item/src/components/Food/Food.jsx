import React from 'react';
import './Food.css'
import { addToDb, removeFromDb } from '../utilitics/fakedb';

const Food = (props) => {
    // console.log(props.food)
    const {idMeal, strMeal, strArea, strMealThumb} = props.food;
    // button onclick function 
    const addToCart = (id) => {
        // console.log('item added', id)
        addToDb(id)
    }
const removeFromCart = id =>{
    // console.log('remove', id)
    removeFromDb(id);
}    


    return (
        <div className='food-style'>
            <img src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
            <h2>{strArea}</h2>
            <h2>{idMeal}</h2>
            <button onClick={() => addToCart(idMeal)}>Add To Cart</button>
            <button onClick={() => removeFromCart(idMeal)}>Remove</button>
        </div>
    );
};

export default Food;