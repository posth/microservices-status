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

    // Hack - not clean, how to update state without having to reset it?
    this.setState({
      microservices: {},
      selectedNode: {}
    });

    fetch(`http://localhost:3004/initialState`)
      .then(result => result.json())
      .then(microservices => {
        this.setState({
          microservices: this.setMicroserviceHttpStatusColor(microservices)
        });
      });
  }

  setMicroserviceHttpStatusColor(microservices) {

    let coloredNodes = microservices.nodes.map((node) => {
      switch (node.httpStatus) {
        case '200':
          node.color = 'lightgreen';
          break;
        case '404':
          node.color = 'red';
          break;
        default:
          node.color = 'orange';
          break;
      }

      // Configure microservice node size based on links.source frequency
      const source = node.id;
      const size = microservices.links.reduce((n, node) => {
        return n + (node.source === source)
      }, 0);
      node.size = size === 0 ? 600 : size * 600;

      return node;
    });

    microservices.nodes = coloredNodes;
    return microservices;
  }

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
          <button onClick={() => { this.getMicroservicesData() }}>Update microservice status</button>
        </section>
      </div>
    )
  }
}
export default App;