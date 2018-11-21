import React from 'react';
import ReactDOM from 'react-dom';
import DeckBoard from './component/deck-master';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './index.css';

// creating redux store
const store = createStore(reducers, applyMiddleware(thunk));

// Render main page in html 
ReactDOM.render(
    <Provider store={store}>
        <DeckBoard/>
    </Provider>,
    document.getElementById('root')
);
