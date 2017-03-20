import React, { Component } from 'react';

class Submit extends Component {
  render() {
    return(
      <form onSubmit={this.props.saveDate}>
        <input type="submit" />
      </form>  
    )
  }
}

export default Submit;