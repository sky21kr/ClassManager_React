import MainToDoTemplate from './components/MainToDoTemplate'
import ClassToDoTemplate from './components/ClassToDoTemplate'
import AddClassTemplate from './components/AddClassTemplate'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    mainToDoList: [],
    classList: [],
  }

  componentDidMount() {
    this.setState({
      mainToDoList: JSON.parse(localStorage.getItem("mainToDoList")) || [],
      classList: JSON.parse(localStorage.getItem("classList")) || []
    })
  }

  // 형식
  // state = {
  //   mainToDoList: [
  //     {
  //       id: 1,
  //       value: 'test',
  //     }
  //   ],
  //   classList: [
  //     {
  //       id: 2,
  //       name: '국어',
  //       toDoList: [
  //         {
  //           id: 5,
  //           value: '값',
  //         }
  //       ],
  //     },
  //     {
  //       id: 3,
  //       name: '수학',
  //       toDoList: [
  //         {
  //           id: 6,
  //           value: '값123',
  //         }
  //       ],
  //     }
  //   ]
  // }

  changeMainToDoList = (toDoList) => {
    this.setState({
      mainToDoList: toDoList
    })
  }

  changeClassToDoList = (classId, toDoList) => {
    const newClassList = this.state.classList.map((cls) => {
      if(cls.id === classId) {
        return { ...cls, toDoList: toDoList}
      } else {
        return cls
      }
    })

    this.setState({
      classList: newClassList,
    })
  }

  addClass = (className) => {
    this.setState({
      classList: [...this.state.classList,
        {
          id: uuidv4(),
          name: className,
          toDoList: [],
        }
      ]
    })

  }

  render() {
    const { mainToDoList, classList } = this.state

    const classTemplateList = classList.map((cls) => {
      return <ClassToDoTemplate
                key={cls.id}
                info={cls}
                changeClassToDoList={this.changeClassToDoList}
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
        <div>
          <AddClassTemplate
            addClass={this.addClass}
          />
        </div>
      </div>
    );
  }
}

export default App;
