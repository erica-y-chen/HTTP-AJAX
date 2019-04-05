import React, { Component } from 'react';
import './friends.css';


class FriendForm extends React.Component {
    constructor () {
        super(); 
        this.state = {
            friend: {
            name: '',
            email: '',
            age: '',
            }
        }
    }

    changeHandler = e => {
        e.persist();
        let value = e.target.value; 
        this.setState({
            friend: {...this.state.friend, [e.target.name]: value}
        })
    }

    SubmitFriend = e => {

        this.props.addItem(e, this.state.friend);
        console.log(e)
        this.setState({
            friend: {
                name: '',
                email: '',
                age: '',
            }
        })
    }




    render() {
        return (
            <div>
                <form onSubmit={this.SubmitFriend}>
                <input 
                    type="string"
                    name = "name"
                    onChange = {this.changeHandler}
                    placeholder = "name"
                    value={this.state.name}
                />
                <input 
                    type="string"
                    name = "email"
                    onChange = {this.changeHandler}
                    placeholder = "email"
                    value={this.state.email}
                />

                <input 
                    type="number"
                    name = "age"
                    onChange = {this.changeHandler}
                    placeholder = "age"
                    value={this.state.age}
                />

                <button className = "submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default FriendForm;