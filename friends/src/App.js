import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends'

class App extends Component {

  constructor (){
    super();
    this.state={
      friends: []
    };
  }

  componentDidMount() {
    axios 
    .get('http://localhost:5000/friends')
    .then(res=>{
      this.setState({friends: res.data});
      console.log(res);
      console.log(this.state.friends);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map (friend => (<Friends friends={friend} name={friend.name} email={friend.email} id={friend.id}/>))}
      </div>
    );
  }
}

export default App;
