import React from 'react';

const Cosmetic = (props) => {
    // console.log(props.cosmetic)
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        console.log('item added', id)
    }

    const addToCartParam = () => addToCart(id);  // array function rapping

    return (
        <div style={{border: '2px solid blue', margin: '10px', padding: '10px'}}>
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
            <h2>ID: {id}</h2>
            <button onClick={addToCartParam}>Add To Cart</button>
            <button onClick={() => addToCart(id)}>Add To Cart: shortCut</button>
        </div>
    );
};

export default Cosmetic;