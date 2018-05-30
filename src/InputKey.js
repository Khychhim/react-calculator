import React from 'react';
import ReactDOM from 'react-dom';

class InputKey extends React.Component{
  render() {
    return (
      <div className="input-number-frame">
        <div className="clear">clear</div>
        <div className="number-frame">
          <div className="inner-number">7</div>
          <div className="inner-number">8</div>
          <div className="inner-number inner-number-last">9</div>
        </div>
        <div className="number-frame">
          <div className="inner-number">4</div>
          <div className="inner-number">5</div>
          <div className="inner-number inner-number-last">6</div>
        </div>
        <div className="number-frame">
          <div className="inner-number">1</div>
          <div className="inner-number">2</div>
          <div className="inner-number inner-number-last">3</div>
        </div>
      </div>
    );
  }
}

export default InputKey;
