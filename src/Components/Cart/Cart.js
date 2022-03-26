import React from 'react';
import './Cart.css'

const Cart = ({ item }) => {
    // console.log(items)

    return (
        <div className='cart-container d-flex p-4'>
            <img src={item.picture} alt="" />
            <h4 className='cart-text'>{item.name}</h4>
            {/* <h2>{items.name}</h2> */}
        </div>
    );
};

export default Cart;