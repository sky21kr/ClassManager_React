import React, { Component } from 'react'
import './ToDoItem.scss'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import CommonModal from './CommonModal'

class ToDoItem extends Component {
    state = {
        showCheckModal: false,
        showDeleteModal: false,
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

    render() {
        const { value, id, checkedTime, handleDeleteItem, handleCheckItem } = this.props
        const { showDeleteModal } = this.state
        return(
            <div>
                <li>
                    <div className={ checkedTime ? 'checked' : '' } onDoubleClick={this.handleModifyItem}>
                        { value }
                    </div>
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