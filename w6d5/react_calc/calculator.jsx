import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    // state
    this.state = { num1: '', num2: "", result: 0 };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.mult = this.mult.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }


  setNum1(event){
    event.preventDefault();
    let num1 = event.target.value/1; // /* divide to coerce num */
    this.setState({ num1 });
  }

  setNum2(event){
    event.preventDefault();

    let num2 = event.target.value/1; // /* divide to coerce num */
    this.setState({ num2 });
  }

  add(event){
    event.preventDefault();
    let result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(event){
    event.preventDefault();
    let result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  mult(event){
    event.preventDefault();
    let result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divide(event){
    event.preventDefault();
    let result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(event){
    event.preventDefault();

    this.setState({ num1: '', num2: "", result: 0 });
  }


  render() {
    return (
      <div>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>clear</button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
