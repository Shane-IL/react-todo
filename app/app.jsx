import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import firebase from 'app/firebase/';
import router from 'app/router/';
import * as actions from 'actions';
import * as configureStoreModule from 'configureStore';

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        hashHistory.push('/todos')
    }
    else{
        hashHistory.push('/');
    }
});

const store = configureStoreModule.configure();

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);
