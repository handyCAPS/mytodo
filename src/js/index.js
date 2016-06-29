import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import style from './../scss/main.scss';

import App from './App';
import Home from './components/Home';
import Single from './components/Single';
import Tasks from './components/Tasks';
import Form from './components/Form';

import Store, { History } from './Store';


const router = (
    <Provider store={Store}>
        <Router history={History}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/single" component={Single}></Route>
                <Route path="/tasks" component={Tasks}></Route>
                <Route path="/form" component={Form}></Route>
            </Route>
        </Router>
    </Provider>
    );

render(router, document.getElementById('root'));
