import React, { Component } from 'react';
import './Styles/app.css';
import { formatDate, keyDate, arrayDate } from '../helpers';
import Calendar from './Calendar';
import Log from './Log';
import WorkoutItems from './WorkoutItems';
import NotesItem from './NotesItem';

class App extends Component {
  constructor(){
    super();

    this.addWorkout=this.addWorkout.bind(this);
    this.timeActivity=this.timeActivity.bind(this);
    this.removeItem=this.removeItem.bind(this);
    this.changeDate=this.changeDate.bind(this);
    this.updateWorkoutLog=this.updateWorkoutLog.bind(this);
    this.addNotes=this.addNotes.bind(this);

    this.state = {
      workoutNames: [],
      currentDate: formatDate(new Date()),
      currentDateKey: keyDate(new Date()),
      currentLog: [],
      currentNotes: "",
      workoutLog: {}
    };
  }

  componentDidMount() {
    const log = localStorage.getItem('log') 

    if(log){
      this.setState({
        workoutLog: JSON.parse(log)
      })
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
    
    const currentLog = this.state.currentLog;

    console.log(currentLog);

    currentLog.push({
      key: date,
      activityType: activityType,
      text: workout,
      reps: reps,
      sets: sets,
      weight: weight
    });

    this.setState({currentLog: currentLog}, this.updateWorkoutLog);
    
    e.target.reset();
  }

  removeItem = (e) => {
    //To-Do: Replace this function with one that looks at index. 
    //Filter is SLOW.
    const target = Number(e.target.value);
    const newArr = this.state.currentLog.filter(function(el){
      return (el.key !== target)
    });

    this.setState({currentLog: newArr}, this.updateWorkoutLog);   
  }

  changeDate = (e) => {
    e.preventDefault();

    const futureDate = e.currentTarget.date.value;
    const formattedFutureDate = formatDate(new Date(arrayDate(futureDate)));
    const log = this.state.workoutLog;  

    if(log[futureDate]){
      this.setState({
        currentLog: log[futureDate].log,
        currentNotes: log[futureDate].notes
      });
    }else{
      this.setState({
        currentLog: [],
        currentNotes: ""
      });
    }

    this.setState({
      currentDate: formattedFutureDate,
      currentDateKey: futureDate
    });
  }

  updateWorkoutLog() {
    const date = this.state.currentDateKey;
    const log = this.state.workoutLog;

    log[date] = {
      log: this.state.currentLog,
      notes: this.state.currentNotes
    };

    this.setState({
      workoutLog: log
    });


    localStorage.setItem('log', JSON.stringify(log) );
  }

  addNotes = (e) => {
    const notes = e.target.value;

    this.setState({currentNotes:notes}, this.updateWorkoutLog);
  }

  timeActivity = (e) => {
    const isTimeActivity = e.currentTarget.checked;
    console.log(isTimeActivity);
  }

  render() {

    return (
      <div>
        <header className='header'>
          <h1>{this.state.currentDate}</h1>
        </header>
        <main className="log">
          <Calendar 
            changeDate={this.changeDate}
          />
          <Log 
            addWorkout={this.addWorkout}
            timeActivity={this.timeActivity}
          />
          <WorkoutItems
            log={this.state.currentLog}
            removeItem={this.removeItem}
          />
          <NotesItem 
            addNotes={this.addNotes}
            notes={this.state.currentNotes}
          />
        </main>
      </div>
    );
  }
}

export default App;