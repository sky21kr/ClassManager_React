import { React, Component } from 'react'
import { Button } from 'react-bootstrap'
import SubmitClassModal from './SubmitClassModal'

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

            <div>
                <Button className="btn" onClick={this.handleShow}>
                    +
                </Button>
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