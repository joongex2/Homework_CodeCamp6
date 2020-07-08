import React, { Component } from 'react'

export default class Try extends Component {
    state = {
        color: "fff",
        size: {
            x: 10,
            y: 20
        }
    }

    updateState() {
        let size = this.state.size;
        size.x = 20;
        this.setState(this.state);
    }

    shouldComponentUpdate() {
        console.log("should component update");
    }

    render() {
        console.log("render is called()");
        return (
            <div>
                <button onClick={() => {this.updateState()}}>updateState</button>
            </div>
        )
    }
}
