import React, { Component } from 'react'
import ClassName from './ClassName'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class ClassToDoTemplate extends Component {

    handleCheck = (id) => {
        const newList = this.props.info.toDoList.filter((list) => {
            return list.id !== id
        })
        this.props.changeClassToDoList(this.props.info.id, newList)
    }

    handleSubmit = (newItem) => {
        const newList = [...this.props.info.toDoList, newItem]
        this.props.changeClassToDoList(this.props.info.id, newList)
    }

    render() {
        const { info } = this.props;

        return(
            <div>
                <ClassName
                    title={info.name}
                />
                <ToDoForm
                    handleSubmit={this.handleSubmit}
                />
                <ToDoList
                    toDoList={info.toDoList}
                    handleCheck={this.handleCheck}
                />
            </div>
        )
    }
}

export default ClassToDoTemplate