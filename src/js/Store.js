import { createStore } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import { getLocalState } from './util/localstorage';

const defaultState = {
    tasks: getLocalState("state.text")
};

const Store = createStore(rootReducer, defaultState);

export const History = syncHistoryWithStore(browserHistory, Store);

export default Store;