import TopBar from './components/TopBar'
import MainToDoList from './components/mainToDoList/MainToDoList'
import ClassToDo from './components/classToDo/ClassToDo'
import MainToDoTemplate from './components/MainToDoTemplate'
// import ClassToDoTemplate from './components/ClassToDoTemplate'

import React, { Component } from 'react';

class App extends Component {
  state = {
    mainToDoList: [
      {
        id: 1,
        value: 'test',
      }
    ],
    class: [
      {
        id: 2,
        name: '과목명',
        toDoList: [
          {
            id: 3,
            value: '값',
          }
        ],
      }
    ]
  }
  

  test() {
    console.log('test', this)
  }


  changeMainToDoList = (list) => {
    console.log(this)
    this.setState({
      mainToDoList: list
    })
  }

  render() {

    const { mainToDoList } = this.state

    return (
      <div>
        {/* <TopBar/> */}
        <div>
          <MainToDoTemplate
            toDoList={mainToDoList}
            changeMainToDoList={this.changeMainToDoList}
          />
        </div>
        <div>
          {/* <ClassToDoTemplate>
            <ClassToDo/>
          </ClassToDoTemplate> */}
        </div>
      </div>
    );
  }
}

export default App;
