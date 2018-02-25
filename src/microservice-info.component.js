import React from 'react';

const MicroserviceInfo = ({ selectedNode }) => (
    <article>
        {
            Object.keys(selectedNode).length === 0 &&
            (<h3>Cliquez sur un microservice (node) pour voir les informations</h3>
        )}
        {selectedNode.name && (<p>
            <span>Nom du Service:</span>
            <span> {selectedNode.name}</span>
        </p>)}
        {selectedNode.url && (<p>
            <span>URL:</span>
            <span><a target="_blank" href={selectedNode.url}> {selectedNode.url}</a></span>
        </p>)}
        {selectedNode.port && (<p>
            <span>Port:</span>
            <span> {selectedNode.port}</span>
        </p>)}
        {selectedNode.id && (<p>
            <span>ID:</span>
            <span> {selectedNode.id}</span>
        </p>)}
        {selectedNode.type && (<p>
            <span>Type:</span>
            <span> {selectedNode.type}</span>
        </p>)}
        {selectedNode.httpStatus && (<p>
            <span>HTTP Status:</span>
            <span> {selectedNode.httpStatus}</span>
        </p>)}
        {selectedNode.method && (<p>
            <span>Method:</span>
            <span> {selectedNode.method}</span>
        </p>)}
        {selectedNode.parameters && (<p>
            <span>Parameters:</span>
            <span> {selectedNode.parameters}</span>
        </p>)}
        {selectedNode.soapaction && (<p>
            <span>SoapAction:</span>
            <span>{selectedNode.soapaction}</span>
        </p>)}
        {selectedNode.auth && (<p>
            <span>Auth:</span>
            <span> {selectedNode.auth}</span>
        </p>)}
        {selectedNode.httpDuration && (<p>
            <span>HTTP Duration:</span>
            <span> {selectedNode.httpDuration}</span>
        </p>)}
    </article>
);

export default MicroserviceInfo;