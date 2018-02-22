import React, { Component } from 'react';
import { connect } from 'react-redux';

import GraphVisuel from './graph-visuel/components/graph-visuel.component';
import { FormMicroservicesContainer } from './graph-visuel/containers/form-microservices.container';

import './App.css';

const mapStateToProps = state => {
  return {
    microservices: state.microservices,
    config: state.config
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <GraphVisuel
            microservices={this.props.microservices}
            config={this.props.config}
          />
        </section>
        <section>
          <FormMicroservicesContainer />
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
