import React from 'react';
import './App.css';
import RegisterForm from './Containers/RegisterForm/RegisterForm';
import Try from './Try';

class App extends React.Component {
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    )
  }
}

export default App;
