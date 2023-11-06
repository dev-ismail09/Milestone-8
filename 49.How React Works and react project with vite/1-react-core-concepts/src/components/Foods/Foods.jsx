import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = (props) => {
    const [foods, setfoods] = useState([])
    
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=r`)
        .then(res => res.json())
        .then(data => setfoods(data.meals))
    },[])


    return (
        <div className='foods-style'>
            {
                foods.map(food => <Food foodName={food.strMeal} photo={food.strMealThumb} area={food.strArea} str={food.strIngredient13}></Food>)
            }
        </div>
    );
};

export default Foods;