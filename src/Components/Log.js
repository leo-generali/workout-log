import React, { Component } from 'react';
import './Styles/formreset.css';
import './Styles/log.css';

class Log extends Component {

  render() {
    return(
      <form className="workoutLog" onSubmit={this.props.addWorkout}>
        <input
          type="checkbox"
          name="timeActivity"
          onChange={this.props.timeActivity}
        />
        <input
          type="text"
          name="workout"
          placeholder="Enter workout."
        />
        <input
          className="repeat repeat--set"
          name="sets"
          type="number"
        />
        <input
          className="repeat repeat--rep"
          name="reps"
          type="number"
        />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default Log;