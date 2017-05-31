import React from 'react';
import UUID from 'node-uuid';
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
                    id: UUID(),
                    text: 'Walk the dinosaur'
                },
                {
                    id: UUID(),
                    text: 'Clean the spaceship'
                },
                {
                    id: UUID(),
                    text: 'Drink whisky'
                },
                {
                    id: UUID(),
                    text: 'Nap'
                }
            ]
        };
    }

    handleAddTodo(todoText){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: UUID(),
                    text: todoText
                }
            ]
        })
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
