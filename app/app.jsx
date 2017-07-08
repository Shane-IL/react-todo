import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import * as actions from 'actions';
import * as configureStoreModule from 'configureStore';

const store = configureStoreModule.configure();

store.subscribe(()=>{
    console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Walk the dinosaur'));
store.dispatch(actions.setSearchText('dinosaur'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <TodoApp/>,
  document.getElementById('app')
);
