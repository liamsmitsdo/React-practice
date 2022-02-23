import React, { Component } from 'react';

class HobbyList extends Component {
    render () {
        const hobbies = ["Eat", "Sleep", "Poop"];
        const liStyle = {fontSize: '1.5em'};
        return (
            <ul>
                {hobbies.map((h, i) => {
                    return <li key={i} style={liStyle}>{h}</li>
                })}   
            </ul>
        )
    }
}

export default HobbyList;