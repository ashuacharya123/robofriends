import React from 'react';
import Tachyons from 'tachyons';


function Card({id,name,email}){
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-10'>
            
            <img alt='Robots' src={`https://robohash.org/${id}?100*100`}></img>
            <div>
                <h2>{name} </h2>
                <p>{email} </p>
            </div>
        </div>
    );    
}

export default Card;