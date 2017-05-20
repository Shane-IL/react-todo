import React from 'react';

export default class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
    }

    render(){
        return(
            <div>
                TodoApp.jsx
            </div>
        )
    }
}
