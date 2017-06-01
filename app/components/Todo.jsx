import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component{
    render(){
        const {id, text, completed, createdAt, completedAt} = this.props;
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
            <div className={todoClassName} onClick={()=>this.props.onToggle(id)}>
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
