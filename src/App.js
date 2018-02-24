import React, { Component } from 'react';

import { Graph } from 'react-d3-graph';
import { config } from './config.data';
import MicroserviceInfo from './microservice-info.component';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      microservices: {},
      selectedNode: {}
    }
  }

  componentDidMount() {
    this.getMicroservicesData();
  }

  getMicroservicesData() {
    fetch(`http://localhost:3004/initialState`)
      .then(result => result.json())
      .then(microservices => {
        this.setState({ microservices });
      });
  }

  // To conditionally render the component on REST response
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  onClickNode = (nodeId) => {

    let currentNode = this.state.microservices.nodes.find((node) => {
      return nodeId === node.id
    });

    this.setState({
      selectedNode: currentNode
    });
  };

  render() {
    return (
      <div className="flex-grid">
        <section className="graph">
          {this.isEmpty(this.state.microservices) && (
            <p>Chargement...</p>
          )}
          {!this.isEmpty(this.state.microservices) && (
            <Graph
              id='microservices-graph'
              data={this.state.microservices}
              config={config}
              onClickNode={this.onClickNode}
            />
          )}
        </section>
        <section className="node-information">
          <h2>Microservice (Node) Information: </h2>
          <MicroserviceInfo selectedNode={this.state.selectedNode} />
          <button>Update status</button>
        </section>
      </div>
    )
  }
}
export default App;