import React, { useEffect, useState } from 'react';
import Dial from './Dial/Dial';
import Knob from './Knob/Knob';

const Watch = () => {
    const [count, setCount] = useState(0)

    const increase = () =>{ setCount(count + 1) }

    // useEffect(()=>{
    //     console.log(count)
    // },[count]) 

   return(
    <div style={{border: '2px solid red', padding:'10px'}}>
        <h1>Watch components</h1>
        <h2>Count: {count}</h2>
        <button onClick={increase}>Increase</button>
        <Dial steps={count}></Dial>
        {/* <Knob steps= {count}></Knob> */}
    </div>
   )
};

export default Watch;