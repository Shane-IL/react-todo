import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'app/firebase/';
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

    it('should generate update todo action', () => {
        const action = {
            type: "UPDATE_TODO",
            id: "1",
            updates: {completed:false}
        }

        const response = actions.updateTodo(action.id, action.updates);

        expect(response).toEqual(action);
    });

    describe('Tests with firebase todos', ()=>{
        let testTodoRef;

        beforeEach((done)=>{
            const todosRef = firebaseRef.child('todos');
            todosRef.remove().then(()=>{
                testTodoRef = firebaseRef.child('todos').push();

                return testTodoRef.set({
                    text:"Something to do",
                    completed: false,
                    createdAt: 2456455
                })
            })
            .then(()=>done())
            .catch(done);

        });

        afterEach((done)=>{
            testTodoRef.remove().then(()=>done());
        });

        it('should fetch todos from firebase and dispatch the ADD_TODOS action', (done)=>{
            const store = createMockStore();
            const action = actions.startAddTodos();

            store.dispatch(action).then(()=>{
                const mockActions = store.getActions();

                expect(mockActions[0].type).toEqual('ADD_TODOS');
                expect(mockActions[0].todos.length).toEqual(1);
                expect(mockActions[0].todos[0].text).toEqual("Something to do");

                done();
            }, done);
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore();
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(()=>{
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });

                expect(mockActions[0].updates).toInclude({
                    completed: true
                });

                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }, done);
        });
    });
});
