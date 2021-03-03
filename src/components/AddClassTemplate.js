import { React, Component } from 'react'
import { Button } from 'react-bootstrap'
import SubmitClassModal from './SubmitClassModal'
import './AddClassTemplate.scss'

class AddClassTemplate extends Component {
    state = {
        modal: false,
    }

    handleShow = () => {
        this.setState({
            modalShow: true,
        })
    }

    handleClose = () => {
        this.setState({
            modalShow: false,
        })
    }

    render() {
        const { modalShow } = this.state
        const { addClass } = this.props
        return(

            <div className="addBtnTemplate">
                <div className="addBtnBorder" onClick={this.handleShow}>
                    <div className="cross"></div>
                    <div></div>
                </div>
                {/* <Button className="addBtn" onClick={this.handleShow}>
                    
                </Button> */}
                <SubmitClassModal
                    mode='add'
                    modalShow={modalShow}
                    addClass={addClass}
                    handleClose={this.handleClose}
                />
            </div>
        )
    }
}

export default AddClassTemplate