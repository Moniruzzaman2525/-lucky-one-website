import React, { useEffect, useState } from 'react';
import WatchCart from '../WatchCart/WatchCart';
import './Watch.css'

const Watch = () => {
    const [watch, setWatch] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(resp => resp.json())
            .then(data => setWatch(data))
    }, [])
    return (
        <div className='watch'>
            <div className='watch-container'>
                {
                    watch.map(watch => <WatchCart watch={watch} key={watch.id}></WatchCart>)
                }
            </div>
            <div className='result'>
                <h2>Hello</h2>
            </div>
        </div>
    );
};

export default Watch;