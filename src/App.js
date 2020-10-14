import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


function App() {

  const [robots, setRobots] = useState([])
  const [search, setSearch] = useState('');

  useEffect(()=>{
    fetch('https://api.mockaroo.com/api/4705b0c0?count=200&key=c1210f40')
    .then(response => response.json())
    .then( data => {setRobots(data)})
    .catch((e)=> console.log("Error>>", e))
  },[])

  const searchOnChange =(e) =>{
    setSearch(e.target.value);
  }

  const filterSearch = robots.filter((robot) =>{
    
    return robot.name.toLowerCase().includes(search.toLowerCase());
  })

  return !robots.length? <h1>Loading...</h1> : (
    <div className="App">
       <SearchBox searchRobo={searchOnChange}/>
       <Scroll>
       <Card roboName = {filterSearch}/>
       </Scroll>
      
    </div>
  )
}

export default App;
