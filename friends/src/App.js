import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, NavLink
} from 'react-router-dom';
import FriendForm from './components/FriendForm'

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

  addItem = (e, friend) => {
    e.preventDefault();
    console.log(friend)
    axios 
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friends: res.data
        });

      })
      .catch(err => {
        console.log(err);
      });

  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <NavLink exact to="/new-friend"><button className="newFriend">+</button></NavLink>
        </div> 
        {this.state.friends.map (friend => (<Friends friends={friend} name={friend.name} email={friend.email} id={friend.id} age={friend.age}/>))}
          <Route path="/new-friend" render={props => <FriendForm {...props} addItem={this.addItem} />}/> 
      </div>
    );
  }
}

export default App;
