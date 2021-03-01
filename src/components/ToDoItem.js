import React, { Component } from 'react'
import './ToDoItem.scss'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'


class ToDoItem extends Component {
    render() {
        const { value, id, handleCheck } = this.props
        return(
            <div>
                <li>
                    <div>
                        { value }
                    </div>
                    <div>
                        <button className="checkBtn btnn" onClick={ () => handleCheck(id)}><FaCheck /></button>
                        <button className="checkBtn btnn" onClick={ () => handleCheck(id)}><FaTrashAlt /></button>
                    </div>
                </li>
            </div>
        )
    }
}

export default ToDoItem