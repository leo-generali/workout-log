import React, { Component } from 'react';
import './Styles/calendar.css';

class Calendar extends Component {
  render() {
    return(
      <form
        className="calendar-form" 
        onSubmit={this.props.changeDate}
      >
        <label>Select Date:</label>
        <input 
          type="date"
          name="date" 
        />
        <button 
          className="submit-btn"
          type="submit" 
        >Change Date</button>
      </form>  
    )
  }
}

export default Calendar;