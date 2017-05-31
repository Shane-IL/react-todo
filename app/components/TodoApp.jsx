import React from 'react';
import UUID from 'node-uuid';
import TodoAPI from 'TodoAPI';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    }

    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo(todoText){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: UUID(),
                    text: todoText,
                    completed: false
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

    handleToggle(id){
        const updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    }

    render(){
        const {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={(e,f)=>this.handleSearch(e,f)}/>
                <TodoList todos={todos} onToggle={(e)=>this.handleToggle(e)}/>
                <AddTodo onAddTodo={(e)=>this.handleAddTodo(e)}/>
            </div>
        )
    }
}
