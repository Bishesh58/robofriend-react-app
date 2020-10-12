import React from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import {roborts} from './RobotsArray';


function App() {
  return (
    <div className="App">
       <SearchBox />
      <Card roboName = {roborts}/>
    </div>
  );
}

export default App;
