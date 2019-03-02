import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import Grid from './components/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Grid/> 
      </div>
    );
  }
}

export default App;
