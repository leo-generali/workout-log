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

    this.state = {
      workoutNames: [],
      currentLog: [],
      workoutLog: {
        "Monday, March 19, 2017": {
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

    this.setState({
      currentLog: currentLog
    });

    localStorage.setItem( "userLog", JSON.stringify(currentLog) );

    console.log( JSON.parse (localStorage.getItem( "userLog" ) ) );

    e.target.reset();
  }

  removeItem = (e) => {
    //To-Do: Replace this function with one that looks at index. 
    //Filter is SLOW.
    const target = Number(e.target.value);
    const newArr = this.state.currentLog.filter(function(el){
      return (el.key !== target)
    });
    this.setState({
      currentLog: newArr
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

    const dateTodayStr = formatDate(new Date());
    const test = "Monday, March 19, 2017";

    const entry = {
      log: this.state.currentLog,
      notes: "test"
    };

    const tempFullLog = this.state.workoutLog;

    tempFullLog[dateTodayStr] = entry;

    console.log(test);
    console.log(tempFullLog["Monday, March 19, 2017"]);
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
            log={this.state.currentLog}
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