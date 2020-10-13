import React, { useState } from 'react';
import tachyons from 'tachyons'
import SearchBox from './SearchBox';

function Card({roboName, search}) {

    return (
        <div className="center pa2">
            {roboName.map((robot)=>{
             return(
                <div key={robot.id} className="tc bg-light-green dib br4 ma2 grow bw2 shadow-5">
                    <img style={{width:'200', height:'200px'}} src={`https://robohash.org/${robot.id}/size=100x100`} alt="roborts"></img>
                    <h3>{robot.first_name}</h3>
                    <p>{robot.email}</p>
                </div>
             )})}
        </div>
    )
}

export default Card
