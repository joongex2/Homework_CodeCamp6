import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentClass from './ComponentClass.js';
import ParentComponent from './ParentComponent.js';
import pic from './Pic/react_icon.png'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <p id="content">content</p>
      <ParentComponent />
      <img src={pic} />
      <ComponentClass />
      <ComponentClass />
      <ComponentClass />
    </div>
  );
}

export default App;
