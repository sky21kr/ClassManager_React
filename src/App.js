import TopBar from './components/TopBar'
import MainToDoTemplate from './components/MainToDoTemplate'
import ClassToDoTemplate from './components/ClassToDoTemplate'
import AddClassTemplate from './components/AddClassTemplate'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss'

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
  //           checkedTime: null,
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
    }, () => {
      localStorage.setItem('mainToDoList', JSON.stringify(this.state.mainToDoList))
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
    }, () => {
      localStorage.setItem('classList', JSON.stringify(this.state.classList))
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
    }, () => {
      localStorage.setItem('classList', JSON.stringify(this.state.classList))
    })
  }

  modifyClass = (classId, modifyClassInfo) => {
    this.setState({
      classList: this.state.classList.map((cls) => {
        if(cls.id === classId) {
          return { ...cls, ...modifyClassInfo }
        } else {
          return cls
        }
      })
    }, () => {
      localStorage.setItem('classList', JSON.stringify(this.state.classList))
    })
  }

  deleteClass = (classId) => {
    this.setState({
      classList: this.state.classList.filter((cls) => cls.id !== classId )
    }, () => {
      localStorage.setItem('classList', JSON.stringify(this.state.classList))
    })
  }

  render() {
    const { mainToDoList, classList } = this.state

    const classTemplateList = classList.map((cls) => {
      return <ClassToDoTemplate
                key={cls.id}
                info={cls}
                modifyClass={this.modifyClass}
                deleteClass={() => this.deleteClass(cls.id)}
                changeClassToDoList={this.changeClassToDoList}
              />
    })

    return (
      <div className="body">
        <TopBar/>
        <div className="contents">
          <div className="leftSide">
            <MainToDoTemplate
              toDoList={mainToDoList}
              changeMainToDoList={this.changeMainToDoList}
            />
          </div>
          <div className="rightSide">
            { classTemplateList }
              <AddClassTemplate
                addClass={this.addClass}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
