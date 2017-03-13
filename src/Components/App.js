import React, { Component } from 'react';
import './app.css';
import { formatDate } from '../helpers';
import Calendar from './Calendar';
import Log from './Log';

class App extends Component {
  constructor(){
    super();

    this.addWorkout=this.addWorkout.bind(this);

    this.state = {
      workoutNames: [],
      workoutLog: []
    };
  }

  addWorkout = (e) =>{
    e.preventDefault();

    const workout = e.currentTarget.workout.value;
    const workoutLog = this.state.workoutLog;

    workoutLog.push(workout);

    this.setState({
      workoutLog: workoutLog
    });

    e.target.reset();
  }

  render() {

    const dateTodayStr = formatDate(new Date());
    return (
      <div>
        <header className='header'>
          <h1>{dateTodayStr}</h1>
        </header>
        <Calendar/>
        <Log 
          addWorkout={this.addWorkout}
        />
      </div>
    );
  }
}

export default App;