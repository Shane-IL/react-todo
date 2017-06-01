import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', ()=>{
    it('should exist', ()=>{
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each Todo item', ()=>{
        const todos =[
            {id:1, text: 'Do something'},
            {id:2, text: 'Do something else'}
        ];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', ()=>{
        const todos =[];
        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const $element = $(ReactDOM.findDOMNode(todoList));

        expect($element.find('.container__message').length).toBe(1);
    })
});
