import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


const List  = ({value, id, handleCheck}) => {
    const onCheck  = () => {
        handleCheck(id)
    }

    return (
        <li>
            <button onClick={onCheck}>✔️</button>
            {value}
        </li>
    )
}

class MainToDoList extends Component {
    state = {
        mainToDoList: [
        ],
    }

    handleSubmit = (value) => {
        this.setState({
            mainToDoList: this.state.mainToDoList.concat({id: uuidv4(), value})
        })  
    }

    handleCheck = (id) => {
        this.setState({
            mainToDoList: this.state.mainToDoList.filter((item) => item.id !== id)
        })
    }    

    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleSubmit(e.target.value)
            e.target.value = ""
        }
    }

    render() {
        const { mainToDoList } = this.state;
        const toDoList = mainToDoList.map(todo => (
            <List key={todo.id} id={todo.id} value={todo.value} handleCheck={this.handleCheck}/>
            )
    )

        return(
            <div className="mainToDoList">
                <input onKeyPress={this.onKeyPress}/>
                { toDoList }
            </div>
        )
    }
}

export default MainToDoList;