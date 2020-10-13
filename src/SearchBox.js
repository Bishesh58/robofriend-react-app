import React, { useState } from 'react'

function SearchBox({searchRobo}) {

    return (
        <div className=" center tc w-50 ml-auto mr-auto mb3">
            <h2>Robo Friends</h2>
            <input type="search"
             onChange={searchRobo} 
             placeholder="search robots"
             className="t3 tc p2 br3 h2">
             </input>
        </div>
    )
}

export default SearchBox
