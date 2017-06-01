import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component{
    render(){
        const {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={()=>this.props.onToggle(id)}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
}
