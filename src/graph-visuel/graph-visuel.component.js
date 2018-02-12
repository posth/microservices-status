import React, { Component } from 'react';

import { Graph } from 'react-d3-graph';

// graph payload (with minimalist structure)
const data = {
    nodes: [
      {id: 'Front-Web'},
      {id: 'Service Sondage'},
      {id: 'Service Eligibilite'},
      {id: 'Service Renouvellement'},
      {id: 'PISE Service Elgibilite'},
      {id: 'PISE Infopret'},
      {id: 'PISE InfoPersonne'},
      {id: 'Assurance Pret (Infocal)'},
      {id: 'Alice', color: 'red'},
      {id: 'AccesD Publique'}
    ],
    links: [
        {source: 'Front-Web', target: 'Service Sondage'},
        {source: 'Front-Web', target: 'Service Eligibilite'},
    ]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    height: 500,
    automaticRearrangeAfterDropNode: true,
    nodeHighlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 500,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue'
    }
};

// graph event callbacks
const onClickNode = function(nodeId) {
    window.alert('Clicked node ${nodeId}');
};

const onMouseOverNode = function(nodeId) {
    //window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
    //window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
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