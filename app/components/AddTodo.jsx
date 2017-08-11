import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class AddTodo extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        const {dispatch} = this.props;
        const todoText = this.refs.todoText.value;
        if(todoText.length > 0){
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(todoText));
        }
        else{
            this.refs.todoText.focus();
        }
    }

    render(){
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Task</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);
