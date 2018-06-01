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
                  calculationProcess: "",
                  result: "",
                  numberArray: [],
                  operatorArray: [],
                  isEnter: false};
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

  //method that set everything back to initial state
  clearAll(){
    this.setState({operatorPress : "NA"});
    this.setState({calculationProcess: ""});
    this.setState({numberArray: []});
    this.setState({operatorArray: []});
    this.setState({isEnter: false});
    this.setState({result : ""});
    this.setState({numberPress: ""});
  }

  //logic for handling keyboard press or click
  handleKeyLogic(input){

    var regNumber = new RegExp('^[1-9]+$');
    var regSymbolOperator = new RegExp('^([+]|[-]|[/]|Enter|Backspace)$');

    var number = "";

    // when clear is press
    if(input === "Delete"){
      this.clearAll();
    }

    //when number is press
    if(regNumber.test(input) && this.state.numberPress.length < 10){
      //set everything back to initial state
      if(this.state.isEnter){
        this.clearAll();  //for some reason, this.state.numberPress is not set empty
        number = "" + input;  //my fix to the stupid problem of this.state.numberPress
      }else{
        number = this.state.numberPress + input;
      }

      //save operators for later calculation
      if(regSymbolOperator.test(this.state.operatorPress)){
        this.state.operatorArray.push(this.state.operatorPress);
      }

      this.setState({operatorPress : ""}); //enable operator
      this.setState({numberPress: number});

    }

    //when operator is press
    if(regSymbolOperator.test(input) && this.state.operatorPress !== "NA"){

      var strCalulationProcess = this.state.calculationProcess;
      var strNumber = this.state.numberPress;

      if(input === "Enter"){
        this.setState({isEnter: true});

        if(this.state.numberPress == ""){
          this.state.numberArray.push(0);
          this.setState({calculationProcess: this.state.calculationProcess + "0"});
        }else{
          this.state.numberArray.push(parseInt(this.state.numberPress));
          this.setState({calculationProcess: this.state.calculationProcess + this.state.numberPress});
        }

        this.state.result = this.calculateResult() + "";
        this.setState({numberPress : this.state.result});
        this.setState({operatorPress : "NA"});  //after enter is press, none of the operator will work
      }
      else if(input === 'Backspace'){
        //delete a single number
        strNumber = (this.state.numberPress).substring(0 , this.state.numberPress.length - 1);
        this.setState({numberPress: strNumber});

        //disable operator when the entire display numbers is deleted.
        if(this.state.numberPress == ""){
          //save operators for later calculation
          if(regSymbolOperator.test(this.state.operatorPress)){
            this.state.operatorArray.push(this.state.operatorPress);
          }

          this.setState({operatorPress: "NA"});// disable operator
        }
      }
      else{
          if(this.state.operatorPress === ""){// calculationProcess = currentNumberDisplay  + operator
              this.setState({calculationProcess: strCalulationProcess + strNumber + " " + input + " "});
          }else{ //calculationProcess = currentCalculationProcess + operator
              strCalulationProcess = strCalulationProcess.substring(0 , strCalulationProcess.length - 3);
              this.setState({calculationProcess: strCalulationProcess + " " + input + " "});
          }

          this.setState({operatorPress: input});

          // save current display number for later calculation
          if(regNumber.test(this.state.numberPress)){
            this.state.numberArray.push(parseInt(this.state.numberPress));
          }

          this.setState({numberPress: ""}); // clear current number display
      }
    }
  }

  //Logic for calculation
  calculateResult(){
    var result = this.state.numberArray[0];

    for (var i = 0; i < this.state.operatorArray.length; i++){
      switch(this.state.operatorArray[i]){
        case '-':
          result = result - this.state.numberArray[i+1];
        break;
        case '+':
          result = result + this.state.numberArray[i+1];
        break;
        case '/':
          result = result / this.state.numberArray[i+1];
        break;
      }
    }

    result = Math.round(result * 100) / 100;
    return result;
  }

  componentDidMount(){
    window.addEventListener("keypress", this.handleKeyPress.bind(this));
  }

  componentWillUnMount(){
    window.removeEventListener("keypress", this.handleKeyPress.bind(this));
  }


  render() {
    console.log(this.state.numberPress);
    return (
      <div className="frame">
        <Display number={this.state.numberPress} calculationProcess = {this.state.calculationProcess}/>
        <div className="input-key-frame">
          <InputKey handleKeyClick={this.handleKeyClick.bind(this)} />
          <Operator handleKeyClick={this.handleKeyClick.bind(this)} />
        </div>

      </div>
    );
  }
}

export default App;
