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


  render() {

    return (
      <div className="display" onClick={this.handle}>
        {this.props.number}
      </div>

    );
  }
}

export default Display;
