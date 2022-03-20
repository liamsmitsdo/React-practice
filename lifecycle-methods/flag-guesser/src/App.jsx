import React, {Component} from 'react';
import FlagGame from './FlagGame';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Guess the Flag</h1>
        </header>
        <FlagGame />
      </div>
    );
  }
}

export default App
