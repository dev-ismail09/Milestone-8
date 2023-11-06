import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border: '2px solid salmon', margin: '15px'}}>
            <h2>Knob component</h2>
            <p>Steps count: {props.steps}</p>
        </div>
    );
};

export default Knob;