import React from 'react'

const ChildFuncComponent = (props) => {
    let {data, color} = props;
    return (<div> this is props from parent component
        <span style={{color: color}}>{data}</span>
        </div>)
}

export default ChildFuncComponent;