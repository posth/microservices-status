export const initialState = {
    microservices: {
        nodes: [
            {
                id: 'Front-Web',
                size: 1000,
                color: 'green'
            },
            { id: 'Service Sondage' },
            { id: 'Service Eligibilite' },
            { id: 'Service Renouvellement' },
            { id: 'PISE Service Elgibilite' },
            { id: 'PISE Infopret' },
            { id: 'PISE InfoPersonne' },
            { id: 'Assurance Pret (Infocal)' },
            { id: 'Alice', color: 'red' },
            { id: 'AccesD Publique' }
        ],
        links: [
            { source: 'Front-Web', target: 'Service Sondage' },
            { source: 'Front-Web', target: 'Service Eligibilite' },
            { source: 'Front-Web', target: 'Service Renouvellement' },
            { source: 'Front-Web', target: 'AccesD Publique' },
            { source: 'Service Renouvellement', target: 'PISE Service Elgibilite' },
            { source: 'Service Renouvellement', target: 'PISE Infopret' },
            { source: 'Service Renouvellement', target: 'PISE InfoPersonne' },
            { source: 'Service Renouvellement', target: 'Assurance Pret (Infocal)' },
            { source: 'Service Renouvellement', target: 'Alice' }
        ]
    },
    config: {
        height: 400,
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
    }
};