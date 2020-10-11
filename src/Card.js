import React from 'react';
import {roborts} from "./RobotsArray";
import tachyons from 'tachyons'

function Card() {
    return (
        <div className="ml4">
            {roborts.map((robort)=>{
               
             return(
                <div key={robort.id} className="tc bg-light-green dib br3 pa3 ma2 mt10 grow bw2 shadow-5">
                    <img src={`https://robohash.org/${robort.id}/200x200`} alt="roborts"></img>
                    <h2>{robort.first_name}</h2>
                    <p>{robort.email}</p>
                </div>
             )})}
        </div>
    )
}

export default Card
