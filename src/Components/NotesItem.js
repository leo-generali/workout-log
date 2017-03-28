import React, { Component } from 'react';
import './Styles/notesitem.css';

class NotesItem extends Component {
  render() {
    return(
      <div className="notes-area">
        <p className="notes-area--header">Notes</p>
        <textarea 
          onChange={this.props.addNotes}
          className="notes-area--textarea"
          value={this.props.notes} 
        />
      </div>
    )
  }
}

export default NotesItem;