
import { combineReducers } from 'redux';
import { routerReducer } from  'react-router-redux';

import tasks from './Tasks';
import VisibilityFilter from './VisibilityFilter';
import Editing from './Editing';

const rootReducer = combineReducers({
    tasks,
    VisibilityFilter,
    Editing,
    routing: routerReducer
});

export default rootReducer;