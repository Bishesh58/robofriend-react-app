import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import {roborts} from './RobotsArray';


function App() {

  const [search, setSearch] = useState();
  const searchOnChange =(e) =>{
    console.log(e.target.value);
  }
  return (
    <div className="App">
       <SearchBox searchRobo={searchOnChange}/>
      <Card roboName = {roborts}/>
    </div>
  );
}

export default App;
