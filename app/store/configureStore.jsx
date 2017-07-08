import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import * as reducers from 'reducers';

export const configure = () => {
    const reducer = combineReducers({
        searchText: reducers.searchTextReducer,
        showCompleted: reducers.showCompletedReducer,
        todos: reducers.todosReducer
    });

    const store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension():f=>f
    ));

    return store;
};
