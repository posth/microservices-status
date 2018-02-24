import React from 'react';

const MicroserviceInfo = ({ selectedNode }) => (
    <article>
        <p><span>Nom du Service: </span> <span>{selectedNode.name || '[inconnu]'}</span></p>
        <p><span>URL: </span> <span><a target="_blank" href={selectedNode.url}>{selectedNode.url || '[inconnu]'}</a></span></p>
        <p><span>Port: </span><span>{selectedNode.port || '[inconnu]'}</span></p>
        <p><span>ID: </span><span>{selectedNode.id || '[inconnu]'}</span></p>
        <p><span>Type: </span><span>{selectedNode.type || '[inconnu]'}</span></p>
        <p><span>HTTP Status: </span><span>{selectedNode.httpStatus || '[inconnu]'}</span></p>
        <p><span>Method: </span><span>{selectedNode.method || '[inconnu]'}</span></p>
        <p><span>Parameters: </span><span>{selectedNode.parameters || '[inconnu]'}</span></p>
        <p><span>SoapAction: </span><span>{selectedNode.soapaction || '[inconnu]'}</span></p>
        <p><span>Auth: </span><span>{selectedNode.auth || '[inconnu]'}</span></p>
        <p><span>HTTP Duration: </span><span>{selectedNode.httpDuration || '[inconnu]'}</span></p>
    </article>
);

export default MicroserviceInfo;