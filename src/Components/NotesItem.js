import React, { Component } from 'react';
import './Styles/notesitem.css';

class NotesItem extends Component {
  render() {
    return(
      <div className="notes-area">
        <p className="notes-area--header">Notes</p>
        <textarea className="notes-area--textarea" />
      </div>
    )
  }
}

export default NotesItem;