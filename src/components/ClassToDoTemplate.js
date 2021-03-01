import React, { Component } from 'react'
import ClassName from './ClassName'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import AddClassModal from './AddClassModal'
import './ClassToDoTemplate.scss'
import { FaEllipsisH, FaRoad } from 'react-icons/fa'
import { DropdownButton, Dropdown } from 'react-bootstrap'

// IoEllipsisHorizontalSharp
class ClassToDoTemplate extends Component {
    state = {
        modalShow: false,
    }


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

    clickModifyBtn = () => {
        this.setState({
            modalShow: true,
        })
    }

    handleClose = () => {
        this.setState({
            modalShow: false,
        })
    }

    handleTest = () => {
        console.log('test')
    }

    render() {
        const { info, modifyClass } = this.props;
        const { modalShow } = this.state

        return(
            <div className="classToDoTemplate">
                <div className="classToDoTop">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-custom-components">
                            <FaEllipsisH
                                className="ellipsisBtn"
                                onClick={this.handleTest}
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">삭제</Dropdown.Item>
                            <Dropdown.Item onClick={this.clickModifyBtn} eventKey="2">수정</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="classToDoHeader">
                    <ClassName
                        title={info.name}
                    />
                    <ToDoForm
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="classTemplateBody">
                    <ToDoList
                        toDoList={info.toDoList}
                        handleCheck={this.handleCheck}
                    />
                </div>
                <div className="classToDoFooter">
                    {/* <BsGear
                        className="settingBtn"
                        onClick={this.clickModifyBtn}
                    /> */}
                </div>
                <AddClassModal
                    mode={'modify'}
                    modalShow={modalShow}
                    classInfo={info}
                    modifyClass={modifyClass}
                    handleClose={this.handleClose}
                />
            </div>
        )
    }
}

export default ClassToDoTemplate