import React, { Component } from 'react';
import './Styles/app.css';
import { formatDate } from '../helpers';
import Calendar from './Calendar';
import Log from './Log';
import WorkoutItems from './WorkoutItems';

class App extends Component {
  constructor(){
    super();

    this.addWorkout=this.addWorkout.bind(this);
    this.removeItem=this.removeItem.bind(this);

    this.state = {
      workoutNames: [],
      workoutLog: []
    };
  }

  addWorkout = (e) =>{
    e.preventDefault();

    const date = Date.now();

    const activityType = e.currentTarget.timeActivity.checked;
    const workout = e.currentTarget.workout.value;
    const reps = e.currentTarget.reps.value;
    const sets = e.currentTarget.sets.value;
    
    const workoutLog = this.state.workoutLog;

    workoutLog.push({
      key: date,
      activityType: activityType,
      text: workout,
      reps: reps,
      sets: sets
    });

    this.setState({
      workoutLog: workoutLog
    });

    e.target.reset();
  }

  removeItem = (e) => {
    const target = Number(e.target.value);
    const newArr = this.state.workoutLog.filter(function(el){
      return (el.key !== target)
    });
    this.setState({
      workoutLog: newArr
    })
  }

  render() {

    const dateTodayStr = formatDate(new Date());

    return (
      <div>
        <header className='header'>
          <h1>{dateTodayStr}</h1>
        </header>
        <Log 
          addWorkout={this.addWorkout}
        />
        <WorkoutItems
          log={this.state.workoutLog}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;