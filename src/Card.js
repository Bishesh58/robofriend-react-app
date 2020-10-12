import React, { useState } from 'react';
import tachyons from 'tachyons'
import SearchBox from './SearchBox';

function Card({roboName}) {

    return (
        <div className="ml4">
            {roboName.map((robort)=>{
             return(
                <div key={robort.id} className="tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5">
                    <img src={`https://robohash.org/${robort.id}/200x200`} alt="roborts"></img>
                    <h2>{robort.first_name}</h2>
                    <p>{robort.email}</p>
                </div>
             )})}
        </div>
    )
}

export default Card
