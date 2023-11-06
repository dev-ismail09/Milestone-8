import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    // fetch kore data ante hole, public folder er modde akta json file create kore sekhane data rakhte hobe then fetch kore niye aste hobe
    // same jinis ta online url a korete korele onek website ase like :- mockAPI, mocki.io
    const [cosmetics, setCosmetics] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        // fetch(`https://mocki.io/v1/f3c169d4-a6e0-4ec6-87a6-6c9785b5dcd8`)
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])

    return(
        <div>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                    ></Cosmetic> )
            }
        </div>
    )
};
export default Cosmetics;