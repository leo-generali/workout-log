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
          className="input-text"
          type="text"
          name="workout"
          placeholder="Enter workout."
        />

        <div className="input-number">
          <span
            className="field field--set">
            Sets
          </span>
          <input
            className="repeat repeat--set"
            name="sets"
            type="number"
          />
        </div>

        <div className="input-number">
          <span
            className="field field--rep">
            Reps
          </span>
          <input
            className="repeat repeat--rep"
            name="reps"
            type="number"
          />
        </div>

        <div className="input-number">
          <span
            className="field field--weight">
            Lbs
          </span>
          <input
            className="repeat repeat--weight"
            name="weight"
            type="number"
          />
        </div>
        <button 
          className="repeat repeat--add"
          type="submit"
        >
        +
        </button>
      </form>
    )
  }
}

export default Log;