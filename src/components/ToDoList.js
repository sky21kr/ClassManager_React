import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
    render() {
        const { toDoList, handleCheck, handleDeleteItem} = this.props

        const list = toDoList.map(({id, value}) => (
            <ToDoItem
                key={id}
                id={id}
                value={value}
                handleCheck={handleCheck}
                handleDeleteItem={handleDeleteItem}
            />
        ))

        return(
            <div>
                { list }
            </div>
        )
    }
}

export default ToDoList