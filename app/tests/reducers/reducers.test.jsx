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
                todo: {
                    id: "abc123",
                    text: "Something to do",
                    completed: false,
                    createdAt: 9825647
                }
            };

            const response = reducers.todosReducer(df([]), df(action));

            expect(response.length).toEqual(1);
            expect(response[0]).toEqual(action.todo);
        });

        it('should update todo', () => {
            const todos = [{
                id: 1,
                text: "Milk the cows",
                completed: false,
                createdAt: moment().unix(),
                completedAt: null
            }];

            const updates = {
                completed: false,
                completedAt: null
            }

            const action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };

            const response = reducers.todosReducer(df(todos), df(action));

            expect(response[0].completed).toEqual(updates.completed);
            expect(response[0].completedAt).toEqual(updates.completedAt);
            expect(response[0].text).toEqual(todos[0].text);

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

    describe('Auth Reducer', () => {
        it('should add uid to state on LOGIN', () => {
            const action = {
                type: "LOGIN",
                uid: "abc123"
            };

            const res = reducers.authReducer(null, df(action));

            expect(res).toEqual({
                uid: action.uid
            });
        });

        it('should wipe auth state obj on logout', () => {
            const authData = {
                uid: 'abc123'
            };
            const action = {
                type: "LOGOUT"
            };

            const res = reducers.authReducer(df(authData), df(action));

            expect(res).toEqual({});
        });
    });
});
