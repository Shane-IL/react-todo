import expect from 'expect';
import df from 'deep-freeze-strict';
import moment from 'moment';
import * as reducers from 'reducers';

describe('Reducers', ()=>{
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'cow'
            };

            const response = reducers.searchTextReducer(df(''), df(action));

            expect(response).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            const response = reducers.showCompletedReducer(df(false), df(action));

            expect(response).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                text: "Milk the cows"
            };

            const response = reducers.todosReducer(df([]), df(action));

            expect(response.length).toEqual(1);
            expect(response[0].text).toEqual(action.text);
        });

        it('should toggle todo', () => {
            const action = {
                type: 'TOGGLE_TODO',
                id: 1
            };

            const response = reducers.todosReducer(df([
                {
                    id: 1,
                    text: "Milk the cows",
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                }
            ]), df(action));

            expect(response[0].completed).toEqual(true);

        });

        it('should add existing todos', () => {
            const todos = [{
                id:'111',
                text: 'Walk the dinosaur',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];

            const action = {
                type: "ADD_TODOS",
                todos
            };

            const result = reducers.todosReducer(df([]), df(action));

            expect(result.length).toEqual(1);
            expect(result[0]).toEqual(todos[0]);
        });
    });
});
