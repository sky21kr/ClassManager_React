import { React, Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class UserInfoSetting extends Component {
    state = {
        file: this.props.file,
        previewURL: this.props.previewURL,
        schoolName: this.props.schoolName,
        majorName: this.props.majorName,
        name: this.props.name,
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state)
        this.props.handleClose()
    }

    handleFileOnChange = (e) => {
        let reader = new FileReader()
        let file = e.target.files[0]
        console.log(e)
        reader.onloadend = () => {
            this.setState({
                file: file,
                previewURL: reader.result
            })
            console.log(file, reader.result)
        }
        reader.readAsDataURL(file)
    }

    render() {
        const { modalShow } = this.props

        let profile_preview = null
        if(this.state.file) {
            profile_preview = <img src={this.state.previewURL}></img>
        }

        return (
            <Modal show={modalShow} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    정보 수정
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="file"
                        accept='image/jpg,impge/png,image/jpeg,image/gif'
                        onChange={this.handleFileOnChange}
                    >
                    </input>
                    {profile_preview}
                    <div>
                        학교
                        <input
                            name="schoolName"
                            defaultValue={this.props.schoolName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        학과
                        <input
                            name="majorName"
                            defaultValue={this.props.majorName}
                            onChange={this.handleChange}
                        />
                    </div> 
                    <div>
                        이름
                        <input
                            name="name"
                            defaultValue={this.props.name}
                            onChange={this.handleChange}
                        />
                    </div> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default UserInfoSetting