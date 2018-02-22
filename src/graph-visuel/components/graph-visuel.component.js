import React from 'react';
import { Graph } from 'react-d3-graph';

const GraphVisuel = ({microservices, config}) => (
    <Graph
        id='graph-id' //id is mandatory, if no id is defined rd3g will throw an error
        data={microservices}
        config={config}
    />
);

export default GraphVisuel;