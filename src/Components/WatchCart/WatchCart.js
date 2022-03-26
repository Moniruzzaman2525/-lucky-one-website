import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './WatchCart.css';

const WatchCart = ({ watch, addToCart }) => {
    const { id, name, price, picture } = watch;
    return (
        <div className='watch-item'>
            <img src={picture} alt="" />
            <h4>Id: {id}</h4>
            <h1>{name}</h1>
            <h1>$ {price}</h1>
            <div>
                <button className='watch-details' onClick={() => addToCart(watch)}>
                    <p className='btn-text'>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                </button>

            </div>
        </div>
    );
};

export default WatchCart;