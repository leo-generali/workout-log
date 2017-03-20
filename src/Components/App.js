import React, { Component } from 'react';
import './Styles/app.css';
import { formatDate } from '../helpers';
import Calendar from './Calendar';
import Log from './Log';
import WorkoutItems from './WorkoutItems';
import Submit from './Submit';

class App extends Component {
  constructor(){
    super();

    this.addWorkout=this.addWorkout.bind(this);
    this.removeItem=this.removeItem.bind(this);
    this.changeDate=this.changeDate.bind(this);
    this.saveDate=this.saveDate.bind(this);

    const initialState =  JSON.parse(localStorage.getItem( "userLog" ));

    if(initialState){
      this.state = {
        workoutNames: [],
        workoutLog: initialState
      };
    }else{
      this.state = {
        workoutNames: [],
        workoutLog: []
      };      
    }
  }

  addWorkout = (e) =>{
    e.preventDefault();

    const date = Date.now();

    const activityType = e.currentTarget.timeActivity.checked;
    const workout = e.currentTarget.workout.value;
    const reps = e.currentTarget.reps.value;
    const sets = e.currentTarget.sets.value;
    const weight = e.currentTarget.weight.value;
    
    const workoutLog = this.state.workoutLog;

    console.log(workoutLog);

    workoutLog.push({
      key: date,
      activityType: activityType,
      text: workout,
      reps: reps,
      sets: sets,
      weight: weight
    });

    this.setState({
      workoutLog: workoutLog
    });

    localStorage.setItem( "userLog", JSON.stringify(workoutLog) );

    console.log( JSON.parse (localStorage.getItem( "userLog" ) ) );

    e.target.reset();
  }

  removeItem = (e) => {
    //To-Do: Replace this function with one that looks at index. 
    //Filter is SLOW.
    const target = Number(e.target.value);
    const newArr = this.state.workoutLog.filter(function(el){
      return (el.key !== target)
    });
    this.setState({
      workoutLog: newArr
    })
    
    localStorage.setItem( "userLog", JSON.stringify(newArr) );

    console.log( JSON.parse (localStorage.getItem( "userLog" ) ) );
  }

  changeDate = (e) => {
    e.preventDefault();

    console.log(e.currentTarget.date.value);
    console.log(new Date());
    console.log(formatDate(new Date()));
  }

  saveDate = (e) => {
    e.preventDefault();
    console.log("TEST");
  }

  render() {

    const dateTodayStr = formatDate(new Date());

    return (
      <div>
        <header className='header'>
          <h1>{dateTodayStr}</h1>
        </header>
        <main className="log">
          <Calendar 
            changeDate={this.changeDate}/>
          <Log 
            addWorkout={this.addWorkout}
          />
          <WorkoutItems
            log={this.state.workoutLog}
            removeItem={this.removeItem}
          />
          <Submit
            saveDate={this.saveDate}
          />
        </main>

      </div>
    );
  }
}

export default App;