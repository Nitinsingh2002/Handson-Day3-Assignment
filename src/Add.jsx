import React, { Component, createRef } from "react";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.num1Ref = createRef();
    this.num2Ref = createRef();
    this.state = {
      result: null,
    };
  }

  handleAddition = () => {
    const num1 = parseInt(this.num1Ref.current.value) 
    const num2 = parseInt(this.num2Ref.current.value)
    this.setState({ result: num1 + num2 })
  };

  render() {
    return (
      <>
        <h1></h1>
        <input type="number" ref={this.num1Ref} placeholder="Enter first number" />
        <input type="number" ref={this.num2Ref} placeholder="Enter second number" />
        <button onClick={this.handleAddition}>Add</button>
        <p>Result :{this.state.result}</p>
      </>
    );
  }
}
