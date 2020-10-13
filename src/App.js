import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import {robots} from './RobotsArray';
import Scroll from './Scroll';


function App() {

  const [search, setSearch] = useState('abc');

  const searchOnChange =(e) =>{
    setSearch(e.target.value);
    
  }
  const filterSearch = robots.filter((robot) =>{
    
    return robot.first_name.toLowerCase().includes(search.toLowerCase());

    // This partialy works>>
    //return robot.first_name.includes(search);    
  })

  return (
    <div className="App">
       <SearchBox searchRobo={searchOnChange}/>
       <Scroll>
       <Card roboName = {filterSearch}/>
       </Scroll>
      
    </div>
  );
}

export default App;
