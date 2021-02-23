import React from 'react';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { userInput: '' };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{this.state.userInput} { this.state.userInput < 1 && '0' } minute{ this.state.userInput > 1 && 's' } </h1>
        <input type="number" onChange={this.handleUserInput} value={this.state.userInput} />
      </div>
    );
  }
}