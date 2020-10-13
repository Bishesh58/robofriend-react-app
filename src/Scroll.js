import React from 'react'

function Scroll(props) {
    return (
        <div style={{overflowY:'scroll',
        height:'900px',
        borderTopLeftRadius:'25px', 
        borderBottomLeftRadius:'25px',
        margin:'10px',
        background:'#16a085'}}>
          {props.children}
        </div>
    )
}

export default Scroll
