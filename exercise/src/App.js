import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';
import Badge from './components/Badge';



class App extends Component {
  render() {
    const url = "https://wordsmith.org/words/images/avatar2_large.png"
    return (
      <div className="App">
        <Avatar data ={url}/>
        <Badge data="8"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
