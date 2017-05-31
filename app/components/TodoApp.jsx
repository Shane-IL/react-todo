import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
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

    handleSearch(showCompleted, searchText){
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        })
    }

    render(){
        const {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={(e,f)=>this.handleSearch(e,f)}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={(e)=>this.handleAddTodo(e)}/>
            </div>
        )
    }
}
