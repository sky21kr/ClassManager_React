import { React, Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class AddClassModal extends Component {
    state = {
        name: "",
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addClass(this.state.name)
        this.handleClose()
    }

    handleClose = () => {
        this.setState({
            name: ""
        })
        this.props.handleClose()
    }

    render() {
        const { modalShow } = this.props

        return (
            <Modal show={modalShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    수업 추가
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        수업이름
                        <input value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={this.handleSubmit}>
                        확인
                    </Button>
                    <Button variant="outline-secondary" onClick={this.handleClose}>
                        취소
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AddClassModal