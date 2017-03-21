import React, { Component } from 'react';
import './Styles/app.css';
import { formatDate, keyDate, arrayDate } from '../helpers';
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

    this.state = {
      workoutNames: [],
      currentDate: formatDate(new Date()),
      currentLog: [],
      workoutLog: {
        "2017-01-01": {
          log: [
            {
              activityType:false,
              key:1490061294674,
              reps:"3",
              sets:"3",
              text:"Bicep Curl",
              weight:"3"
            }
          ],
          notes: "My fart smells "
        }
      }
    };
    
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

    this.setState({currentLog: currentLog},this.saveDate)
    
    e.target.reset();
  }

  removeItem = (e) => {
    //To-Do: Replace this function with one that looks at index. 
    //Filter is SLOW.
    const target = Number(e.target.value);
    const newArr = this.state.currentLog.filter(function(el){
      return (el.key !== target)
    });
    this.setState({currentLog: newArr},this.saveDate)
    
  }

  changeDate = (e) => {
    e.preventDefault();

    const willChangeToDate = e.currentTarget.date.value;
    const formattedwillChangeToDate = formatDate(new Date(arrayDate(willChangeToDate)));

    //Need to add error handling to this for user switch

    const futureLogToDisplay = this.state.workoutLog[willChangeToDate].log;


    this.setState({
      currentDate: formattedwillChangeToDate,
      currentLog: futureLogToDisplay
    });
  }

  saveDate = (e) => {
    const dateTodayStr = keyDate(new Date());
    const test = "2017-01-01";

    const entry = {
      log: this.state.currentLog,
      notes: "test"
    };

    const tempFullLog = this.state.workoutLog;

    tempFullLog[dateTodayStr] = entry;
  }

  render() {

    return (
      <div>
        <header className='header'>
          <h1>{this.state.currentDate}</h1>
        </header>
        <main className="log">
          <Calendar 
            changeDate={this.changeDate}/>
          <Log 
            addWorkout={this.addWorkout}
          />
          <WorkoutItems
            log={this.state.currentLog}
            removeItem={this.removeItem}
          />
        </main>

      </div>
    );
  }
}

export default App;