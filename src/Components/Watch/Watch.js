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
                {
                    cart.map(item => <Cart
                        item={item}
                        key={item.id}
                    ></Cart>)
                }

                <button onClick={removeItem}>hello</button>


            </div>
        </div>
    );
};

export default Watch;