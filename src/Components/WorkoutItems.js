import React, { Component } from 'react';
import './Styles/workoutitems.css';

class WorkoutItems extends Component {
  render() {
    const that = this;

    const log = this.props.log;

    function addLog(item){
      return(
        <li className="log-list-item" key={item.key}>
          <span className="log-text">
          {item.text}
          </span>
          <span className="log-item log-item--sets">
          {item.sets}
          </span>
          <span className="log-item log-item--reps">
          {item.reps}
          </span>
          <span className="log-item log-item--weight">
          {item.weight}
          </span>
          <button
            className="remove-btn"
            onClick={that.props.removeItem}
            value={item.key}>
            X
          </button>
        </li>
      )
    }

    const listItems = log.map(addLog);

    return(
      <ul className="workout-items">
        {listItems}
      </ul>
    )
  }
}

export default WorkoutItems;