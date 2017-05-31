import React from 'react';

export default class TodoSearch extends React.Component{

    handleSearch(){
        const showCompleted = this.refs.showCompleted.checked;
        const searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }

    render(){
        return(
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={(e)=>this.handleSearch(e)}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={(e)=>this.handleSearch(e)}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}
