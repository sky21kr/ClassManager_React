import MainToDoTemplate from './components/MainToDoTemplate'
import ClassToDoTemplate from './components/ClassToDoTemplate'

import React, { Component } from 'react';

class App extends Component {
  state = {
    mainToDoList: [
      {
        id: 1,
        value: 'test',
      }
    ],
    classList: [
      {
        id: 2,
        name: '국어',
        toDoList: [
          {
            id: 5,
            value: '값',
          }
        ],
      },
      {
        id: 3,
        name: '수학',
        toDoList: [
          {
            id: 6,
            value: '값123',
          }
        ],
      }
    ]
  }

  changeMainToDoList = (list) => {
    this.setState({
      mainToDoList: list
    })
  }

  render() {
    const { mainToDoList, classList } = this.state

    const classTemplateList = classList.map((cls) => {
      return <ClassToDoTemplate
                info={cls}
              />
    })

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
          { classTemplateList }
        </div>
      </div>
    );
  }
}

export default App;
