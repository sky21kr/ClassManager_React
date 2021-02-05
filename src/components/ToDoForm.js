import React, { Component } from 'react'

class ToDoForm extends Component {
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="hi"/>
            </form>
        )
    }

}

export default ToDoForm