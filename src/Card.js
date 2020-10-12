import React, { useState } from 'react';
import tachyons from 'tachyons'
import SearchBox from './SearchBox';

function Card({roboName, search}) {

    return (
        <div className="ml4">
            {roboName.map((robot)=>{
             return(
                <div key={robot.id} className="tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5">
                    <img src={`https://robohash.org/${robot.id}/200x200`} alt="roborts"></img>
                    <h2>{robot.first_name}</h2>
                    <p>{robot.email}</p>
                </div>
             )})}
        </div>
    )
}

export default Card
