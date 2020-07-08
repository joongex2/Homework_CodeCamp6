import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hook from './Hook.js';
import Todo from './Todo.js';
import {Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <div className="App">
          <Link to="/todo">todo</Link>
          <Link to="/hook">hook</Link>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
          </header>
        </div>
      </Route>
      <Route path="/hook">
        <Hook />
      </Route>
      <Route path="/todo">
        <Todo />
      </Route>
    </Switch>
  );
}

export default App;
