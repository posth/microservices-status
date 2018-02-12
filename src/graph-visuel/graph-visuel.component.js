import React, { Component } from 'react';

import { Graph } from 'react-d3-graph';
import { myConfig } from './config.graph';
import { data } from './microservice.data';

// graph event callbacks
const onClickNode = function(nodeId) {
    window.alert(`Service: ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
    //window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
    //window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
    //window.alert(`Clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
    //window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
    //window.alert(`Mouse out link between ${source} and ${target}`);
};

class GraphVisuel extends Component {

    render() {
        return (
            <div>
                <Graph
                    id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
                    data={data}
                    config={myConfig}
                    onClickNode={onClickNode}
                    onClickLink={onClickLink}
                    onMouseOverNode={onMouseOverNode}
                    onMouseOutNode={onMouseOutNode}
                    onMouseOverLink={onMouseOverLink}
                    onMouseOutLink={onMouseOutLink}/>
            </div>
        );
    }
}

export default GraphVisuel;