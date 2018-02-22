import { combineReducers } from 'redux';
import microservices from './microservices';
import config from './config';

const graphVisuelData = combineReducers({
    microservices,
    config
});

export default graphVisuelData;