import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class ToDoForm extends Component {
    state = {
        input: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {id: uuidv4(), value: this.state.input}
        this.props.handleSubmit(newItem)
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange}/>
            </form>
        )
    }

}

export default ToDoForm