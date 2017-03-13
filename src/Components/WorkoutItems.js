import React, { Component } from 'react';
import './Styles/workoutitems.css'

class WorkoutItems extends Component {


  render() {
    const that = this;

    const log = this.props.log;

    function addLog(item){
      return(
        <li key={item.key}>
          {item.text + " " + item.sets + " " + item.reps}
          <button
            onClick={that.props.removeItem}
            value={item.key}>
            X
          </button>
        </li>
      )
    }

    const listItems = log.map(addLog);

    return(
      <ul className="WorkoutItems">
        {listItems}
      </ul>
    )
  }
}

export default WorkoutItems;