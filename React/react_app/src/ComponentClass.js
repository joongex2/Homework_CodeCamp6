import React, { Component } from 'react'

export default class ComponentClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Peter",
            lastName: "Pan",
            age: "16",
            color: true,
            list: [
                {content: "aaaa", score: 1},
                {content: "bbbb", score: 2},
                {content: "cccc", score: 3},
                {content: "dddd", score: 4},
                {content: "eeee", score: 5}
            ]
        }
    }
    render() {
        return (
            <div style={{color: "inherit"}}>
                this is component for reuse
            <p onClick={() => this.state.color ? this.setState({color: false}): this.setState({color: true})}
                style={{color: this.state.color ? "inherit": "blue"}}>My name is {this.state.name} {this.state.lastname} I'm {this.state.age}</p>
                <button onClick={() => this.setState({name: prompt("add your name")})}>edit name</button>
                <ul>
                    {/* <li>{this.state.list[0]}</li>
                    <li>{this.state.list[1]}</li>
                    <li>{this.state.list[2]}</li>
                    <li>{this.state.list[3]}</li>
                    <li>{this.state.list[4]}</li> */}
                    {this.state.list.map(obj => <li>{obj.content} score : {obj.score}</li>)}
                </ul>
            </div>
        )
    }
}
