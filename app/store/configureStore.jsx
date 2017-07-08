import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import * as reducers from 'reducers';

export const configure = (initialState = {}) => {
    const reducer = combineReducers({
        searchText: reducers.searchTextReducer,
        showCompleted: reducers.showCompletedReducer,
        todos: reducers.todosReducer
    });

    const store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension():f=>f
    ));

    return store;
};
