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
        const addItem = cart.find((item) => item.id === product.id)
        if (!addItem)
            if ((cart.length < 4)) {
                const newCart = [...cart, product]
                setCart(newCart);
            }
            else {
                alert('you selected more than product')
            }
        else {
            alert('A product cannot be repeatedly selected')
        }
    }




    const choiceButton = () => {
        if (cart.length === 0) {
            alert('Please add a product')
        }
        else {
            const newcart = [];
            const ran = Math.floor(Math.random() * cart.length);
            newcart.push(cart[ran]);
            setCart(newcart)
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

                <div className="cart-info">
                    <h1>Order Summary</h1>

                    {
                        cart.map(item => <Cart
                            item={item}
                            key={item.id}
                        // items={items}
                        ></Cart>)
                    }
                    <div className="btn-cart">
                        <button className='order-btn2' onClick={() => choiceButton()}>
                            CHOOSE 1 FOR ME
                        </button>
                        <button className='order-btn' onClick={() => removeItem()}>
                            CHOOSE AGAIN
                        </button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Watch;