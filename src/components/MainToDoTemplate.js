import React, { Component } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class MainToDoTemplate extends Component {
    render() {
        const { toDoList, changeMainToDoList } = this.props;
        
        const handleCheck = (id) => {
            const newList = toDoList.filter((list) => {
                return list.id !== id
            })
            changeMainToDoList(newList)
        }

        return(
            <div>
                <ToDoForm/>
                <ToDoList
                    toDoList={toDoList}
                    handleCheck={handleCheck}
                />
            </div>
        )
    }
}

export default MainToDoTemplate