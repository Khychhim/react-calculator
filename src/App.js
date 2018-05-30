import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import InputKey from './InputKey';
import Operator from './Operator';

class App extends Component {
  render() {
    return (
      <div className="frame">
        <Display/>
        <div className="input-key-frame">
          <InputKey/>
          <Operator/>
        </div>

      </div>
    );
  }
}

export default App;
