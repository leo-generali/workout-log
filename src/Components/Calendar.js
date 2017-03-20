import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return(
      <form onSubmit={this.props.changeDate}>
        <label>Select Date:</label>
        <input 
          type="date"
          name="date" 
        />
        <input type="submit" />
      </form>  
    )
  }
}

export default Calendar;