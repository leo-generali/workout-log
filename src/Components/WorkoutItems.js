import React, { Component } from 'react';
import './Styles/workoutitems.css'

class WorkoutItems extends Component {
  render() {

    const log = this.props.log;

    function addLog(item){
      return <li key={item.key}>{item.text + " " + item.sets + " " + item.reps}</li>
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