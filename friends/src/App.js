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
      friends: [],
      editing: false,
      key: '',
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

  edit = (id) =>{
    console.log(this.state.editing);
    this.setState({
      key: id,
      editing: !this.state.editing, 
    })
  
  }

  changeHandler = e => {
    e.persist();
    let value = e.target.value; 
    this.setState({
        friend: {...this.state.friend, [e.target.name]: value}
    })
}

EditFriend = e => { 
  this.setState({
    
  })
}


  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="heading">Friends</div>
          <NavLink exact to="/new-friend"><button className="newFriend">+</button></NavLink>
        </div> 
        {this.state.friends.map (friend => (<Friends EditFriend = {this.EditFriend} number={this.state.key} changeHandler={this.changeHandler} friends={friend} name={friend.name} email={friend.email} id={friend.id} age={friend.age} editing={this.state.editing} edit={this.edit}/>))}
          <Route path="/new-friend" render={props => <FriendForm {...props} addItem={this.addItem} />}/> 
      </div>
    );
  }
}

export default App;
