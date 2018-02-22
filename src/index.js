import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import graphVisuelData from './graph-visuel/reducers';
import App from './App';

import { initialState } from './initialState';

let store = createStore(graphVisuelData, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

