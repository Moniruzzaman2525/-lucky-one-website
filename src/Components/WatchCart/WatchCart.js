import React from 'react';

const WatchCart = ({ watch }) => {
    const { id, name, price, picture } = watch;
    return (
        <div>
            <img src={picture} alt="" />
            <h4>Id: {id}</h4>
            <h1>name: {name}</h1>
            <p>Price: {price}</p>
        </div>
    );
};

export default WatchCart;