import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import WatchCart from '../WatchCart/WatchCart';
import './Watch.css'

const Watch = () => {
    const [watch, setWatch] = useState([]);
    const [cart, setCart] = useState([]);

    // console.log(cart);
    useEffect(() => {
        fetch('data.json')
            .then(resp => resp.json())
            .then(data => setWatch(data))
    }, [])

    const addToCart = (product) => {
        if ((cart.length < 4)) {
            const newCart = [...cart, product]
            setCart(newCart);
        }
    }




    const choiceButton = () => {
        let newcart = [];
        const ran = Math.floor(Math.random() * cart.length);
        newcart.push(cart[ran]);
        // console.log(newcart);
        setCart(newcart)
    }

    const removeItem = () => {
        setCart([])
    }


    return (
        <div className='watch'>
            <div className='watch-container'>
                {
                    watch.map(watch => <WatchCart
                        watch={watch}
                        key={watch.id}
                        addToCart={addToCart}
                    ></WatchCart>)
                }
            </div>
            <div className='result'>
                <h1>Order Summary</h1>
                {
                    cart.map(item => <Cart
                        item={item}
                        key={item.id}
                    // items={items}
                    ></Cart>)
                }
                {/* {
                    items.map(items => <Extra items={items}></Extra>)
                } */}

                <button className='order-btn' onClick={removeItem}>
                    <p className='order-text'>Clear Order</p>
                </button>
                <button className='order-btn2' onClick={choiceButton}>
                    <p>Choice For me</p>
                </button>

            </div>
        </div>
    );
};

export default Watch;