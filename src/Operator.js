import React from 'react';
import ReactDOM from 'react-dom';

class Operator extends React.Component{
  //passing selecting value back to parent for handle
  handleMouseDown = (value)=>{
    this.props.handleKeyClick(value);
  }

  // remove focus after mouse release
  handleMouseUp = ()=>{
    this.divide.blur();
    this.minus.blur();
    this.plus.blur();
    this.equal.blur();
  }

  componentDidMount(){
    //listen for keyboard press to set focus on keypad display
    document.addEventListener("keypress", this.handlePressFocus.bind(this));
    //listen for keyboard release to remove focus on keypad display
    document.addEventListener("keyup", this.handlePressBlur.bind(this));
  }

  //remove listeners
  componentWillUnMount(){
    document.removeEventListener("keypress", this.handlePressFocus.bind(this));
    document.removeEventListener("keyup", this.handlePressBlur.bind(this));
  }

  //set focus on keypad display
  handlePressFocus = (event) => {
    var key = event.key;
    switch(key){
      case '/':
        this.divide.focus();
        break;
      case '-':
        this.minus.focus();
        break;
      case '+':
        this.plus.focus();
        break;
      case 'Enter':
        this.equal.focus();
        break;
      }
  }

  //remove focus on keypad display
  handlePressBlur = (event) => {
    var key = event.key;

    switch(key){
      case '/':
        this.divide.blur();
        break;
      case '-':
        this.minus.blur();
        break;
      case '+':
        this.plus.blur();
        break;
      case 'Enter':
        this.equal.blur();
        break;
    }
  }

  render() {
    return (
      <div className="operator-frame">
        <div className="inner-operator" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "/")} onMouseUp={this.handleMouseUp.bind(this)} ref= {(input) => { this.divide = input }}>&#247;</div>
        <div className="inner-operator" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "-")} onMouseUp={this.handleMouseUp.bind(this)} ref= {(input) => { this.minus = input }}>&#8722;</div>
        <div className="inner-operator" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "+")} onMouseUp={this.handleMouseUp.bind(this)} ref= {(input) => { this.plus = input }}>&#43;</div>
        <div className="inner-operator" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "Enter")} onMouseUp={this.handleMouseUp.bind(this)} ref= {(input) => { this.equal = input }}>&#61;</div>
      </div>
    );
  }
}

export default Operator;
