import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart);
    // const cart = props.cart;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div>
            <h1>Order Summary</h1>
                <div className='cart-info'>
                    <p>Selected Items:{quantity} </p>
                    <p>Total Price: ${totalPrice} </p>
                    <p>Total Shipping Charge: ${totalShipping} </p>
                    <p>Tax: ${tax.toFixed(2)} </p>
                    <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
                </div>
        </div>
    );
};

export default Cart;