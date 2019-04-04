import React, { Component } from 'react';
import './friends.css';


const Friends = props => {
    return (
        <div className="friend">
            <div className="id">{props.friends.id}</div>
            <div className="name">{props.friends.name}</div>
            <div className="email">{props.friends.email}</div>
            <div className="age">{props.friends.age}</div> 
        </div>
    )
}

export default Friends; 