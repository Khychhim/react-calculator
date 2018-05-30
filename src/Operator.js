import React from 'react';
import ReactDOM from 'react-dom';

class Operator extends React.Component{
  render() {
    return (
      <div className="operator-frame">
        <div className="inner-operator">&#247;</div>
        <div className="inner-operator">&#8722;</div>
        <div className="inner-operator">&#43;</div>
        <div className="inner-operator">&#61;</div>
      </div>
    );
  }
}

export default Operator;
