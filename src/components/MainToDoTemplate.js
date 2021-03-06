import React, { Component } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import moment from 'moment'
import './MainToDoTemplate.scss'

class MainToDoTemplate extends Component {

    handleDeleteItem = (id) => {
        const newList = this.props.toDoList.filter((list) => {
            return list.id !== id
        })
        this.props.changeMainToDoList(newList)
    }

    handleSubmit = (newItem) => {
        const newList = [...this.props.toDoList, newItem]
        this.props.changeMainToDoList(newList)
    }

    handleCheckItem = (id) => {
        const newList = this.props.toDoList.map((list) => {
            if( list.id === id ) {
                if(list.checkedTime) list.checkedTime = null
                else list.checkedTime = moment().format('YYYY-MM-DD')
                return list
            } else return list
        })
        this.props.changeMainToDoList(newList)
    }

    modifyItemContent = (id, content) => {
        const newList = this.props.toDoList.map((list) => {
            if( list.id === id ) {
                const newList = {
                    ...list, value: content
                }
                return newList
            } else return list
        })
        this.props.changeMainToDoList(newList)
    }

    render() {
        const { toDoList } = this.props;

        return(
            <div className="mainToDoTemplate">
                <div>
                    <ToDoForm
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="mainToDoBody">
                    <ToDoList
                        toDoList={toDoList}
                        handleDeleteItem={this.handleDeleteItem}
                        handleCheckItem={this.handleCheckItem}
                        modifyItemContent={this.modifyItemContent}
                    />
                </div>
            </div>
        )
    }
}

export default MainToDoTemplate