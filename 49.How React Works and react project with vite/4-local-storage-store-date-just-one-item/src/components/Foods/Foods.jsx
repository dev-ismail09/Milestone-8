import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=ri`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])

    return (
        <div className='foods-style'>
            {
                foods.map(food => <Food 
                    key={food.idMeal}
                    food = {food}
                    ></Food>)
            }
        </div>
    );
};

export default Foods;