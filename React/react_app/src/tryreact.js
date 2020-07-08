import React from 'react';
// const element = <h1 color="blue">Hello, world!</h1>
// React.createElement(
//     'div',
//     {color: 'blue'},
//     Hello, world!
// )

function Repeat(props) {
    let items = [];
    for(let i = 0; i< props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function App2() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index}</div>}
        </Repeat>
    );
}

export default App2;