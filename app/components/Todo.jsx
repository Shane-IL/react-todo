import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import * as actions from 'actions';

export class Todo extends React.Component{
    render(){
        const {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo';
        const renderDate = () => {
            let message = 'Created: ';
            let timeStamp = createdAt;

            if(completed){
                message = 'Completed: ';
                timeStamp = completedAt;
            }

            return message + moment.unix(timeStamp).format('MMM Do YYYY @ HH:mm');
        };

        return(
            <div className={todoClassName} onClick={()=>{dispatch(actions.startToggleTodo(id, !completed))}}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default connect()(Todo);
