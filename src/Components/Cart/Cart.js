import React from 'react';

const Cart = ({ item }) => {

    // console.log(item.id);
    // let min = item.id;
    // let max = item.id

    // const ranomia = () => {
    //     // setCart([])
    //     min = Math.floor(Math.random() * (max - min + 1)) + min;
    //     // console.log(min)
    // }

    // console.log(item);
    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    );
};

export default Cart;