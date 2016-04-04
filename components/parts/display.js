import React from 'react';

var Display = React.createClass({
  render() {
    return (this.props.if) ? <div>{this.props.children}</div> : null;
  }
});
module.exports = Display;

/*
REUSABLE COMPONENTS..
since we are using JSX  we cant just write if/else condition statements
we write : return (condition) ? "this condition is true" : "this condition is false"
*/
