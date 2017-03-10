import React, { Component } from 'react';
import './App.css';
import { formatDate } from '../helpers';

class App extends Component {
  constructor(){
    super();

    this.state = {};
  }


  render() {

    const dateTodayStr = formatDate(new Date());


    return (
      <div className='header'>
        <h1>{dateTodayStr}</h1>
      </div>
    );
  }
}

export default App;
