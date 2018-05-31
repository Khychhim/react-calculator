import React from 'react';
import ReactDOM from 'react-dom';

class Display extends React.Component{

  constructor(){
    super();
    this.state = {currentText: "", wholeText: ""};
  }

  handle = ()=>{
    var txt = this.state.txt;
    console.log(txt.length)
  }

  numberWithCommas(x){
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }


  render() {
    var number = this.numberWithCommas(this.props.number);
    
    return (
        <div className="display">
          <div className="display-process">
            {this.props.calculationProcess}
          </div>
          <div className="display-result">
            {number}
          </div>
        </div>


    );
  }
}

export default Display;
