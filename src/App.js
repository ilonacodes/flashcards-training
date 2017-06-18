import React, { Component } from 'react';
import './index.css';
import { Flashcard } from './components/Flashcard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Flashcard />
      </div>
    );
  }
}

export default App;
