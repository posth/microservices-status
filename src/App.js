import React, { Component } from 'react';

import { Graph } from 'react-d3-graph';
import { config } from './config.data';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      microservices: {}
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3004/initialState`)
      .then(result => result.json())
      .then(microservices => {
        this.setState({ microservices });
      })
  }

  // To conditionally render the component on REST response
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  render() {
    return (
      <div>
        {this.isEmpty(this.state.microservices) && (
          <p>Chargement</p>
        )}
        <section>
          {!this.isEmpty(this.state.microservices) && (
            <Graph
              id='microservices-graph'
              data={this.state.microservices}
              config={config}
            />
          )}
        </section>
      </div>
    )
  }
}
export default App;