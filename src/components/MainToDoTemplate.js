import React, { Component } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class MainToDoTemplate extends Component {

    handleCheck = (id) => {
        const newList = this.props.toDoList.filter((list) => {
            return list.id !== id
        })
        this.props.changeMainToDoList(newList)
    }

    handleSubmit = (newItem) => {
        const newList = [...this.props.toDoList, newItem]
        this.props.changeMainToDoList(newList)
    }

    render() {
        const { toDoList } = this.props;

        return(
            <div>
                <ToDoForm
                    handleSubmit={this.handleSubmit}
                />
                <ToDoList
                    toDoList={toDoList}
                    handleCheck={this.handleCheck}
                />
            </div>
        )
    }
}

export default MainToDoTemplate