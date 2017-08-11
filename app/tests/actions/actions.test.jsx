import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actions from 'actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text actions', () => {
        const action = {
            type: "SET_SEARCH_TEXT",
            searchText: "cows"
        }

        const response = actions.setSearchText(action.searchText);

        expect(response).toEqual(action);
    });

    it('should generate add todo action', () => {
        const action = {
            type: "ADD_TODO",
            todo: {
                id: "123abc",
                text: "Lorem ipsum",
                completed: false,
                createdAt: 0
            }
        }

        const response = actions.addTodo(action.todo);

        expect(response).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done)=>{
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate add todos action object', () => {
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

        const response = actions.addTodos(todos);

        expect(response).toEqual(action);
    });

    it('should generate show completed action', () => {
        const action = {
            type: "TOGGLE_SHOW_COMPLETED"
        }

        const response = actions.toggleShowCompleted();

        expect(response).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        const action = {
            type: "TOGGLE_TODO",
            id: "1"
        }

        const response = actions.toggleTodo(action.id);

        expect(response).toEqual(action);
    });
});
