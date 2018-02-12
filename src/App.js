import React, { Component } from 'react';
import './App.css';

import GraphVisuel from './graph-visuel/graph-visuel.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Renouvellement Hypothecaire - Microservices visualisation</h1>
        </header>
        <p className="App-intro">
          <GraphVisuel />
        </p>
      </div>
    );
  }
}

export default App;
