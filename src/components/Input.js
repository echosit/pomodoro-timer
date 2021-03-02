import React from 'react';
import Timer from './Timer';

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
        <Timer pomodoro={this.state.userInput}/> {/* Set props.pomodoro to input value */}
        <input type="number" onChange={this.handleUserInput} value={this.state.userInput} />
      </div>
    );
  }
}