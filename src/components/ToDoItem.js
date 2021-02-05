import React, { Component } from 'react'

class ToDoItem extends Component {
    render() {
        const { value, id, handleCheck } = this.props
        return(
            <div>
                <li>
                    <button onClick={ () => handleCheck(id)}>✔️</button>
                    { value }
                </li>
            </div>
        )
    }
}

export default ToDoItem