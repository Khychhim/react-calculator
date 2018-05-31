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
                  operatorPress: "NA", //operator cannot be pressed at start
                  calculationProcess: ""};
  }

  //handle global keyboard press and save value to this.state
  handleKeyPress = (event)=>{
    var keyPress = event.key;
    this.handleKeyLogic(keyPress);
  }

  //handle click from child component and save value to this.state
  handleKeyClick = (keyClick)=>{
    this.handleKeyLogic(keyClick);
  }

  //logic for handling keyboard press or click
  handleKeyLogic(input){
    var regNumber = new RegExp('^[1-9]+$');
    var regSymbolOperator = new RegExp('^([+]|[-]|[/]|Enter|Backspace)$');
    var regTest = new RegExp('^([+]|[-]|[/])$');

    if(regNumber.test(input) && this.state.numberPress.length < 10){
      if(regTest.test(this.state.operatorPress)){
        console.log(this.state.operatorPress);
      }
      this.setState({operatorPress : ""}); //enable operator
      var number = (this.state.numberPress + input);
      this.setState({numberPress: number});
    }

    if(regSymbolOperator.test(input)){
      var strCalulationProcess = this.state.calculationProcess;
      var strNumber = this.state.numberPress;
      var result = "";
      if(input === "Enter"){

      }
      else if(input === 'Backspace'){ //delete a single number
        strNumber = (this.state.numberPress).substring(0 , this.state.numberPress.length - 1);

        this.setState({numberPress: strNumber});
        if(this.state.numberPress == ""){
          if(regTest.test(this.state.operatorPress)){
            console.log(this.state.operatorPress);
          }
          this.setState({operatorPress: "NA"});// disable operator
        }
      }
      else if(this.state.operatorPress !== "NA"){ //check if operator is disable
          if(this.state.operatorPress === ""){ // save previous calculationProcess string + current number + operator
              this.setState({calculationProcess: strCalulationProcess + strNumber + " " + input + " "});
          }else{// current calculationProcess string + current operator value
              strCalulationProcess = strCalulationProcess.substring(0 , strCalulationProcess.length - 3);
              this.setState({calculationProcess: strCalulationProcess + " " + input + " "});
          }
          this.setState({operatorPress: input});
          console.log(this.state.numberPress);
          this.setState({numberPress: ""}); // clear current number display


      }
    }
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
        <Display number={this.state.numberPress} operator={this.state.operatorPress} calculationProcess = {this.state.calculationProcess}/>
        <div className="input-key-frame">
          <InputKey handleKeyClick={this.handleKeyClick} />
          <Operator handleKeyClick={this.handleKeyClick} />
        </div>

      </div>
    );
  }
}

export default App;
