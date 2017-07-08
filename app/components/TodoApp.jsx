import React from 'react';
import UUID from 'node-uuid';
import moment from 'moment';
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
            todos: TodoAPI.getTodos(),
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
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
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
        const {todos, showCompleted, searchText} = this.state;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return(
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={(e,f)=>this.handleSearch(e,f)}/>
                            <TodoList/>
                            <AddTodo onAddTodo={(e)=>this.handleAddTodo(e)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
