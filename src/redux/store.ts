import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { playbackMiddleware } from './middleware';
import reducers from './reducers';
import initialState from './state';

const middlewares = [
    thunk,
    logger,
    playbackMiddleware
];

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middlewares)
    )
);

export default store;