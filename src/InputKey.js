import React from 'react';
import ReactDOM from 'react-dom';

class InputKey extends React.Component{
  
  //passing selecting value back to parent for handle
  handleMouseDown = (value)=>{
    this.props.handleKeyClick(value);
  }

  // remove focus after mouse release
  handleMouseUp = ()=>{
    this.one.blur();
    this.two.blur();
    this.three.blur();
    this.four.blur();
    this.five.blur();
    this.six.blur();
    this.seven.blur();
    this.eight.blur();
    this.nine.blur();
  }

  componentDidMount(){
    //listen for keyboard press to set focus on keypad display
    document.addEventListener("keypress", this.handlePressFocus.bind(this));
    //listen for keyboard release to remove focus on keypad display
    document.addEventListener("keyup", this.handlePressBlur.bind(this));
  }

  //remove listeners
  componentWillUnMount(){
    document.removeEventListener("keydown", this.handlePressFocus.bind(this));
    document.removeEventListener("keyup", this.handlePressBlur.bind(this));
  }

  //set focus on keypad display
  handlePressFocus = (event) => {
    var key = event.key;
    switch(key){
      case '1':
        this.one.focus();
        break;
      case '2':
        this.two.focus();
        break;
      case '3':
        this.three.focus();
        break;
      case '4':
        this.four.focus();
        break;
      case '5':
        this.five.focus();
        break;
      case '6':
        this.six.focus();
        break;
      case '7':
        this.seven.focus();
        break;
      case '8':
        this.eight.focus();
        break;
      case '9':
        this.nine.focus();
        break;
    }
  }

  //remove focus on keypad display
  handlePressBlur = (event) => {
    var key = event.key;

    switch(key){
      case '1':
        this.one.blur();
        break;
      case '2':
        this.two.blur();
        break;
      case '3':
        this.three.blur();
        break;
      case '4':
        this.four.blur();
        break;
      case '5':
        this.five.blur();
        break;
      case '6':
        this.six.blur();
        break;
      case '7':
        this.seven.blur();
        break;
      case '8':
        this.eight.blur();
        break;
      case '9':
        this.nine.blur();
        break;
    }
  }

  render() {
    return (
      <div className="input-number-frame">
        <div className="clear">clear</div>
        <div className="number-frame">
          <div className="inner-number" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "7")} onMouseUp={this.handleMouseUp.bind(this)} ref= {(input) => { this.seven = input }}>7</div>
          <div className="inner-number" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "8")} onMouseUp={this.handleMouseUp.bind(this)} ref= { (input) => { this.eight = input }}>8</div>
          <div className="inner-number inner-number-last" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "9")} onMouseUp={this.handleMouseUp.bind(this)} ref= { (input) => { this.nine = input }}>9</div>
        </div>
        <div className="number-frame">
          <div className="inner-number" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "4")} onMouseUp={this.handleMouseUp.bind(this)} ref= { (input) => { this.four = input }}>4</div>
          <div className="inner-number" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "5")} onMouseUp={this.handleMouseUp.bind(this)} ref= { (input) => { this.five = input }}>5</div>
          <div className="inner-number inner-number-last" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "6")} onMouseUp={this.handleMouseUp.bind(this)} ref= { (input) => { this.six = input }}>6</div>
        </div>
        <div className="number-frame">
          <div className="inner-number" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "1")} onMouseUp={this.handleMouseUp.bind(this)} ref= { (input) => { this.one = input }}>1</div>
          <div className="inner-number" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "2")} onMouseUp={this.handleMouseUp.bind(this)}  ref= { (input) => { this.two = input }}>2</div>
          <div className="inner-number inner-number-last" tabIndex="0" onMouseDown={this.handleMouseDown.bind(this, "3")} onMouseUp={this.handleMouseUp.bind(this)} ref= { (input) => { this.three = input }}>3</div>
        </div>
      </div>
    );
  }
}

export default InputKey;
