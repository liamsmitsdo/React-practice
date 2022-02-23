import React, { Component } from 'react';
import HobbyList from './hobby';

class Pet extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">Moxie</h2>
                <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" alt='moxie'/>
                <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
                <HobbyList />
            </div>
        )
    }
}

export default Pet;