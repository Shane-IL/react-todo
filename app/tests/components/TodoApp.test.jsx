import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', ()=>{
    it('should exist', ()=>{
        expect(TodoApp).toExist();
    });

    it('should add new todo item to todos state on handleAddTodo', ()=>{
        const todoText = 'Replace the flux capacitor';
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    })

    it('should toggle completed value when handleToggle called', ()=>{
        const todo = {id: 1, text: "Mow grandma's hump", completed: false};
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: [todo]});
        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(true);
    })
});
