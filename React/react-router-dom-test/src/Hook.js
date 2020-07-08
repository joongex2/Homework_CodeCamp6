import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Hook extends Component {
    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/hook">hook</Link>
                Hook
            </div>
        )
    }
}
