import { React, Component } from 'react'

class ClassTitle extends Component {
    render() {
        const { title } = this.props

        return(
            <div>
                { title }
            </div>
        )
    }
}

export default ClassTitle