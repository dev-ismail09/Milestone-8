import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {id, category, name, price, img, quantity, ratings, shipping} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product-container'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <p>Catagory: {category}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='product-btn'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;