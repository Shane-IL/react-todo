import React from 'react';

export default class AddTodo extends React.Component{
    onSubmit(e){
        e.preventDefault();
        const todoText = this.refs.todoText.value;
        if(todoText.length > 0){
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        }
        else{
            this.refs.todoText.focus();
        }
    }

    render(){
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Task</button>
                </form>
            </div>
        );
    }
}
