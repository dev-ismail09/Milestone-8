import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid blue', margin: '10px'}}>
            <h1>Dial Component</h1>
            <p>Steps Count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;