import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
    render() {
        const { toDoList, handleCheck, handleDeleteItem, handleCheckItem} = this.props

        const list = toDoList.map(({id, value, checkedTime}) => (
            <ToDoItem
                key={id}
                id={id}
                value={value}
                checkedTime={checkedTime}
                handleCheck={handleCheck}
                handleDeleteItem={handleDeleteItem}
                handleCheckItem={handleCheckItem}
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