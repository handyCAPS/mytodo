
import { combineReducers } from 'redux';
import { routerReducer } from  'react-router-redux';

import tasks from './Tasks';

const rootReducer = combineReducers({
    tasks,
    routing: routerReducer
});

export default rootReducer;