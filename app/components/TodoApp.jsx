import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dinosaur'
                },
                {
                    id: 2,
                    text: 'Clean the spaceship'
                },
                {
                    id: 3,
                    text: 'Drink whisky'
                },
                {
                    id: 4,
                    text: 'Nap'
                }
            ]
        };
    }

    handleAddTodo(todoText){
        alert('new todo: '+ todoText);
    }

    render(){
        const {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={(e)=>this.handleAddTodo(e)}/>
            </div>
        )
    }
}
