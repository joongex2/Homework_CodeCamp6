import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/hook">hook</Link>
                Todo
            </div>
        )
    }
}
