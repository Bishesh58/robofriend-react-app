import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import {robots} from './RobotsArray';


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
      <Card roboName = {filterSearch}/>
    </div>
  );
}

export default App;
