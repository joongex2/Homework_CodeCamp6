import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        case "text":
            return { ...state, text: [...state.text, action.text] };
        default:
            return state;
    }
}

const Example = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, text: [] })
    const [text, setText] = useState("");
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <button onClick={() => dispatch({ type: "increment" })}> + </button>
                <button onClick={() => dispatch({ type: "decrement" })}> - </button>
                <button onClick={() => dispatch({ type: "reset" })}> reset </button>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: "text", text: text });
                setText("");
            }
            }>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <ul style={{listStyleType: "none"}}>
                {state.text.map(text => <li>{text}</li>)}
            </ul>
        </div>
    )
}

export default Example;