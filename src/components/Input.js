import React from 'react';
import Timer from './Timer';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    
    //Minutes Input
    this.state = { userMinutesInput: 25 }; //default value of input to 25
    this.handleUserMinutesInput = this.handleUserMinutesInput.bind(this);

    //Hours Input
    this.state = { userHoursInput: 0 }; //default value of input to 0
    this.handleUserHoursInput = this.handleUserHoursInput.bind(this);

  }
  
  /////change state with input value///////
  //Minutes Input
  handleUserMinutesInput(e) {
    this.setState({userMinutesInput: e.target.value});
  }
  //Hours Input
  handleUserHoursInput(e) {
    this.setState({userHoursInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="number" onChange={this.handleUserHoursInput} value={this.state.userHoursInput} max={59} min={0} />
        <input type="number" onChange={this.handleUserMinutesInput} value={this.state.userMinutesInput} max={59} min={1} />
        <Timer pomodoro={this.state.userMinutesInput}/> {/* Set props.pomodoro to input value */}
      </div>
    );
  }
}