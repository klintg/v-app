import React from 'react';

var Board = React.createClass({
  render() {
    return(<h1>board: {this.props.status}</h1>)
  }
});
export default Board;
