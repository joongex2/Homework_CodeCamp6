import React from 'react'

export const Card = (props) => {
    const { pic, title, content } = props
    return (
        <div style={{ width: "200px", backgroundColor: "grey" }}>
            <div style={{ backgroundColor: "wheat", height: "200px" }}><img alt="" src={pic} style={{height: "200px", width: "100%"}}></img></div>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div>card footer</div>
        </div>
    )
}