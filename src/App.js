import React, { Component } from 'react';
import './App.css';
import Output from './output/Output';



class App extends Component {

  render() {

    return (
      <main className="App">
              <header className="App-header radius">
              <h1 className="App-title">Check VAT Service</h1>
              </header>
              <Output/>
      </main>
    );
  }
}

export default App;
