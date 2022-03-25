import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './WatchCart.css';

const WatchCart = ({ watch, addToCart }) => {
    const { id, name, price, picture } = watch;
    return (
        <div>
            <img src={picture} alt="" />
            <h4>Id: {id}</h4>
            <h1>name: {name}</h1>
            <div className='add-to-cart'>
                <button className='watch-details' onClick={() => addToCart(watch)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default WatchCart;