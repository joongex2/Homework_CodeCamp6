import React, { useState, useEffect } from 'react'

export const HookCounter = () => {
    const [count, updateCount] = useState(0);
    
    // componentDidMount
    useEffect(() => {
        console.log('componentDidMount');
    }, [])
    // componentDidMount, componentDidUpdate (specific state)// have should component update check
    useEffect(() => {
        console.log('componentDidMount, componentDidUpdate (update only count)');
    }, [count])
    // componentDidMount, componentDidUpdate (every state)
    useEffect(() => {
        console.log('componentDidMount, componentDidUpdate (update not specific)');
    })

    return (
        <div style={{textAlign: "center"}}>
            <h3>{count}</h3>
            <div>
                <button onClick={() => updateCount(count - 1)}>-</button>
                <button onClick={() => updateCount(count + 1)}>+</button>
            </div>
        </div>
    )
}