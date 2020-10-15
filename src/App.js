import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

import {setSearchField, requestRobots } from './actions';

const mapStateToProps = state =>{
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) =>{
 return { 
   searchOnChange: (e) => dispatch(setSearchField(e.target.value)),
   onRequestRobots: () => dispatch(requestRobots())
 }
}

function App() {

  
  const {searchField, searchOnChange, robots, isPending} = this.props
 
  
  const filterSearch = robots.filter((robot) =>{
    
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return isPending? <h1>Loading...</h1> : (
    <div className="App">
       <SearchBox searchRobo={searchOnChange}/>
       <Scroll>
       <Card roboName = {filterSearch}/>
       </Scroll>
      
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
