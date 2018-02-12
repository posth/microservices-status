import React, { Component } from 'react';

import { Graph } from 'react-d3-graph';
import { myConfig } from './config.graph';
import { data } from './microservice.data';

// graph event callbacks
const onClickNode = function(nodeId) {
    window.alert(`Service: ${nodeId}`);
};

class GraphVisuel extends Component {

    render() {
        return (
            <div>
                <Graph
                    id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
                    data={data}
                    config={myConfig}
                    onClickNode={onClickNode}/>
            </div>
        );
    }
}

export default GraphVisuel;