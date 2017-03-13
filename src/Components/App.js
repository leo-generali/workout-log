import React, { Component } from 'react';
import './App.css';
import { formatDate } from '../helpers';
import Calendar from './Calendar';
import Log from './Log';

class App extends Component {
  constructor(){
    super();

    this.state = {};
  }


  render() {

    const dateTodayStr = formatDate(new Date());
    return (
      <div>
        <header className='header'>
          <h1>{dateTodayStr}</h1>
        </header>
        <Calendar />
        <Log />
      </div>
    );
  }
}

export default App;