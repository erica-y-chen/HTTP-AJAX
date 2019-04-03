import React, { Component } from 'react';
import './friends.css';


const Friends = props => {
    return (
        <div className="friend">
            <h3>{props.friends.id}</h3>
            <h2>{props.friends.name}</h2>
            <h3>{props.friends.email}</h3>
        </div>
    )
}

export default Friends; 