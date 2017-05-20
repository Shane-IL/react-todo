import React from 'react';

export default class Todo extends React.Component{
    render(){
        const {id, text} = this.props;

        return(
            <div>
                {id}. {text}
            </div>
        )
    }
}
