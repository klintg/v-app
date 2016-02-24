import React from 'react';
import ReactDOM from 'react-dom';

var JoinSpeaker = React.createClass({
  start() {
    var speakerName = ReactDOM.findDOMNode(this.refs.name).value;
    var title = ReactDOM.findDOMNode(this.refs.title).value;
    this.props.emit('start', { name: speakerName, title: title });
  },
  render() {
    return (
      <form action='javascript:void(0)' onSubmit={this.start}>
        <label> Full Name </label>
        <input ref = "name" className="form-control" placeholder="enter your full name.." required />

        <label> Presentation Title </label>
        <input ref = "title" className="form-control" placeholder="enter title.." required />

        <button className = "btn btn-primary">Join</button>

      </form>
    )
  }
});
module.exports = JoinSpeaker;
