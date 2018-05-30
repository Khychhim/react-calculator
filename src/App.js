import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import InputKey from './InputKey';
import Operator from './Operator';

class App extends Component {
  constructor(){
    super();
    this.state = {numberPress: "",
                  operatorPress: ""};
  }

  //handle global keyboard press and save value to this.state
  handleKeyPress = (event)=>{
    var regNumber = new RegExp('^[0-9]+$');
    var regSymbol = new RegExp('^([+]|[-]|Enter|Backspace)$');
    var inputKey = event.key;

    if(regNumber.test(inputKey)){
      this.setState({numberPress: inputKey});
    }

    if(regSymbol.test(inputKey)){
      this.setState({operatorPress: inputKey});
    }
  }

  //handle click from child component and save value to this.state
  handleKeyClick = (keyClick)=>{
    this.setState({numberPress: keyClick});
  }

  componentDidMount(){
    window.addEventListener("keypress", this.handleKeyPress.bind(this));
  }

  componentWillUnMount(){
    window.removeEventListener("keypress", this.handleKeyPress.bind(this));
  }


  render() {
    return (
      <div className="frame">
        <Display number={this.state.numberPress} operator={this.state.operatorPress}/>
        <div className="input-key-frame">
          <InputKey handleKeyClick={this.handleKeyClick}/>
          <Operator />
        </div>

      </div>
    );
  }
}

export default App;
