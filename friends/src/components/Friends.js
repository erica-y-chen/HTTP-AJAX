import React, { Component } from 'react';
import './friends.css';
import Edit from '../img/edit.png'

const Friends = (props) => {
    return (
        <div className="friend">
            <div className="editIcon">
                <img className="edit" src={Edit} onClick={ () => props.edit(props.friends.id)}/>
            </div>
            <div className="id">{props.friends.id}</div>
            <div className="name"> {props.editing && props.friends.id == props.number ?
                    <form><input 
                    type="string" 
                    name="name" 
                    onChange={props.changeHandler} 
                    placeholder= {props.friends.name}/></form> :
                    props.friends.name
                }</div>
            <div className="email">{props.editing && props.friends.id == props.number ?
                    <form><input 
                    type="string" 
                    name="email" 
                    onChange={props.changeHandler} 
                    placeholder= {props.friends.email}/></form> :
                    props.friends.email
                }</div>
            <div className="age">{props.editing && props.friends.id == props.number ?
                    <form><input 
                    type="number" 
                    name="age" 
                    onChange={props.changeHandler} 
                    placeholder= {props.friends.age}/></form> :
                    props.friends.age
                }</div> 
        </div>
    )
}

export default Friends; 


