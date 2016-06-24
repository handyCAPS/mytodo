import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import Single from './components/Single';
import Tasks from './components/Tasks'

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="/single" component={Single}></Route>
            <Route path="/tasks" component={Tasks}></Route>
        </Route>
    </Router>
    );

render(router, document.getElementById('root'));
