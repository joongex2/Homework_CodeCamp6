import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './import.js';
import './exercise_2_7.js';
import {rabbit, animal} from './exercise_2_7.js';
import './exercise_3_4.js';
import './exercise_4_6.js';
import './exercise_5_2.js';
import './tryclass.js';
import App2 from './tryreact.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
