import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';
import Login from 'Login';
import * as actions from 'actions';
import * as configureStoreModule from 'configureStore';

const store = configureStoreModule.configure();

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todo" component={TodoApp}/>
                <IndexRoute component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
