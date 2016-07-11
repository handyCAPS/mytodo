
import { combineReducers } from 'redux';
import { routerReducer } from  'react-router-redux';

import tasks from './Tasks';
import VisibilityFilter from './VisibilityFilter';

const rootReducer = combineReducers({
    tasks,
    VisibilityFilter,
    routing: routerReducer
});

export default rootReducer;