/**
 * Created by eden90267 on 2017/3/11.
 */
import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducer';


let initialState = {
    visbility: 'SHOW_ALL',
    todos: [{
        id: 0,
        completed: false,
        text: 'initial for demo'
    }]
};

let finalCreateStore = compose(
    applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

let store = finalCreateStore(reducer, initialState);

export default store;