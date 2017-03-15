import React, { Component } from 'react';
import Dragula from 'react-dragula';
import './Styles/workoutitems.css';

class WorkoutItems extends Component {


  render() {
    const that = this;

    const log = this.props.log;

    function addLog(item){
      return(
        <li className="log-list-item" key={item.key}>
          <span className="log-item log-item--text">
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
      <ul className="WorkoutItems" ref={this.dragulaDecorator}>
        {listItems}
      </ul>
    )
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      console.log(componentBackingInstance);
      Dragula([componentBackingInstance]);
    }
  }

}

export default WorkoutItems;