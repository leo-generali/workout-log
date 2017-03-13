import React, { Component } from 'react';
import './formreset.css';
import './log.css';

class Log extends Component {

  render() {
    return(
      <form className="workoutLog" onSubmit={this.props.addWorkout}>
        <input
          type="text"
          name="workout"
          placeholder="Enter workout."

        />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default Log;