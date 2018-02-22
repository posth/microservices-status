import { connect } from 'react-redux';

import GraphVisuel from './components/graph-visuel.component';

const mapStateToProps = state => {
    return {
        microservices: state.microservices,
        config: state.config
    }
}

const GraphVisuelContainer = connect(
    mapStateToProps
)(GraphVisuel)

export default GraphVisuelContainer;