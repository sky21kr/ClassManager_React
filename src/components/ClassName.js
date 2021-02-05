import { React, Component } from 'react'

class ClassName extends Component {
    render() {
        const { title } = this.props

        return(
            <div>
                { title }
            </div>
        )
    }
}

export default ClassName