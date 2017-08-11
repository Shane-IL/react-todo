import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', ()=>{
    it('should exist', ()=>{
        expect(Todo).toExist();
    });

    it('should dispatch UPDATE_TODO action on click', ()=>{
        const todoData = {id: 1, text:'Reticulate splines', completed: true};
        const action = actions.startToggleTodo(todoData.id, !todoData.completed)
        const spy = expect.createSpy();
        const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        const $element = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($element[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
