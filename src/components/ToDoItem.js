import React, { Component } from 'react'
import './ToDoItem.scss'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import CommonModal from './CommonModal'

class ToDoItem extends Component {
    state = {
        showCheckModal: false,
        showDeleteModal: false,
        editMode: false,
        content: null,
    }

    handleDeleteItem = () => {
        this.setState({
            showDeleteModal: true,
        })
    }

    handleDeleteModalClose = () => {
        this.setState({
            showDeleteModal: false,
        })
    }


    handleModifyItem = (checkedTime) => {
        if(!checkedTime) {
            this.setState({
                editMode: true,
                content: this.props.value
            })
        }
    }

    changeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    submitContent = (e) => {
        if(e.key === "Enter") {
            this.props.modifyItemContent(this.props.id, this.state.content)

            this.setState({
                editMode: false,
                content: null,
            })
        }
    }

    render() {
        const { value, id, checkedTime, handleDeleteItem, handleCheckItem } = this.props
        const { showDeleteModal, editMode } = this.state        

        let itemContents = null;
        if(editMode) {
            itemContents = 
            <input value={this.state.content} onKeyPress={this.submitContent} onChange={this.changeContent}/> 
        } else {
            itemContents =
            <div className={ checkedTime ? 'checked' : '' } onDoubleClick={() => this.handleModifyItem(checkedTime)}>
                { value }
            </div>
        }

        return(
            <div>
                <li>
                    {itemContents}
                    {/* <div className={ checkedTime ? 'checked' : '' } onDoubleClick={() => this.handleModifyItem(checkedTime)}>
                        { value }
                    </div>
                    <input/> */}
                    <div>
                        <button className="checkBtn" onClick={() => handleCheckItem(id)}><FaCheck /></button>
                        <button className="deleteBtn" onClick={this.handleDeleteItem}><FaTrashAlt /></button>
                    </div>
                </li>
                <CommonModal
                    modalShow={showDeleteModal}
                    handleClose={this.handleDeleteModalClose}
                    handleOk={() => handleDeleteItem(id)}
                    modalTitle="항목 삭제"
                    modalContents="해당 항목을 삭제하시겠습니까?"
                />
            </div>
        )
    }
}

export default ToDoItem