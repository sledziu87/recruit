import React, { Component } from 'react';
import './App.css';
import Output from './output/Output';
import ModalWindow from "./modal/ModalWindow";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Check VAT Service</h1>
        </header>
          <Output/>
          <ModalWindow/>
      </div>
    );
  }
}

export default App;
