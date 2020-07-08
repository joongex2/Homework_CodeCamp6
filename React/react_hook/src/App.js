import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter/Counter';
import { TodoList } from './TodoList/TodoList';
import { Switch, Route } from 'react-router-dom';
import ClassCounter from './UseEffect/ClassCounter';
import { HookCounter } from './UseEffect/HookCounter';
import { Home } from './Component/Home';
import Context, { Context2 } from './Context';
import Example from './Component/Example';

function App() {
  const [state, setState] = useState({ content: "Hello World" })
  return (
    <Switch>
      <Route exact path='/'>
        <Context2.Provider value={{ state, setState }}>
          <div>
            <Home />
          </div> 
        </Context2.Provider>
      </Route>
      <Route path="/counter">
        <Counter></Counter>
      </Route>
      <Route path="/todo">
        <TodoList></TodoList>
      </Route>
      <Route path="/classCounter">
        <ClassCounter />
      </Route>
      <Route path="/hookCounter">
        <HookCounter />
      </Route>
      <Route path="/example">
        <Example />
      </Route>

    </Switch>
  );
}

export default App;
