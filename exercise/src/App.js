import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import UserCard from './components/UserCard';


// let name = props.name
// let image = props.image
// let rank = props.rank
// let score = props.score

class App extends Component {
  render() {
    const url = "https://wordsmith.org/words/images/avatar2_large.png"
    return (
      <div className="App">
        <Avatar data ={url}/>
        <Badge data="53"/>
        <UserCard name="Laura" image={url} rank="Super Moderator" score="53" />
      </div>
    );
  }
}

export default App;
