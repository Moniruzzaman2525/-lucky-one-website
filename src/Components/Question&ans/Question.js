import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='m-4'>
                <h2>1. How React Work:</h2>
                <h4>React creates a little virtual dome in memory.After manipulating the browser's DOM directly, it creates a virtual DOM in the feedback memory.
                    It is necessary to change all the requirements, Before switching to browser dome.React is a very popular JavaScript library. Today, many stunt-ups take their feedback as a platform to quickly create font-end applications for their projects.It has a staggering 5.5 million downloads per week, but many developers don't know how React actually works.</h4>

                <h2>2. Props vs State Diferents</h2>
                <h4> Status can be used to modify and update data.But data cannot be updated by using props. If data is to be updated with props, then first data has to be converted to state.State 2 can be defined .State can only be used with state element / class element."props" are short for "property" so there's nothing particularly fancy .Like props, the state keeps information about the material. However, the type of information and how it is handled differs.</h4>
            </div>
        </div>
    );
};

export default Question;