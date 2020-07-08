import React, { Component } from 'react'

export default class ClassCounter extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log("Mount");
    }
    
    componentDidUpdate() {
        console.log("Update");
    }

    render() {
        const count = this.state.count;
        return ( 
            <div class="text-align">
                <h3>{count}</h3>
                <div>
                    <button onClick={() => this.setState({count: count - 1})}>-</button>
                    <button onClick={() => this.setState({count: count + 1})}>+</button>
                </div>
            </div>
        )
    }
}
