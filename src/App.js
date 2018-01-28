import React, { Component } from 'react';
import './App.css';
import InputComp from './InputComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Check VAT Service</h1>
        </header>
          <InputComp/>
      </div>
    );
  }
}

export default App;
