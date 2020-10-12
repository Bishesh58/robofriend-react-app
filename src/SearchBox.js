import React, { useState } from 'react'

function SearchBox() {

    const [input, setInput] = useState();
    const searchRobo =(e)=>{
        
       
    }

    return (
        <div className="tc w-50 ml-auto mr-auto mb3 p2 bg-light-green shadow-5 br4">
            <h1 className="pt3">Robo Friends</h1>
            <input value={input} onChange={searchRobo} placeholder="search robots" className="t3 tc p2 br3 h2 mb3"></input>
        </div>
    )
}

export default SearchBox
