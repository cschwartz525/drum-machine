import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import initialState from './state';

const middlewares = [
    thunk,
    logger
];

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middlewares)
    )
);

export default store;