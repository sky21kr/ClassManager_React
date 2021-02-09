import React, { Component } from 'react'
import './ToDoItem.scss'

class ToDoItem extends Component {
    render() {
        const { value, id, handleCheck } = this.props
        return(
            <div>
                <li>
                    <button className="checkBtn" onClick={ () => handleCheck(id)}>✔️</button>
                    { value }
                </li>
            </div>
        )
    }
}

export default ToDoItem