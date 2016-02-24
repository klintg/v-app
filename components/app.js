import React from 'react';
import io from 'socket.io-client';

import Header from './header.js'
import Home from './home';


var App = React.createClass({
  getInitialState() {
    return{
      status: 'disconnected',
      title: '',
      member: {},
      audience: [],
      speaker: ''

    }
  },
  componentWillMount() {       //after the components have mounted they should connnect to the port 9000
    this.socket = io('http://localhost:9000')
    this.socket.on('connect', this.connect)
    this.socket.on('disconnect', this.disconnect)
    this.socket.on('welcome', this.updateState)
    this.socket.on('joined', this.joined)
    this.socket.on('audience', this.updateAudience)
    this.socket.on('start', this.start)
    this.socket.on('end', this.updateState)
  },

  emit(eventName, payload) {
    this.socket.emit(eventName, payload)
  },

  connect() {
    var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null; //this checks whether ther is a member in session storage and parse it otherwise it does nothing Null.

    if(member && member.type === 'audience') {
      this.emit('join', member);
    } else if (member && member.type === 'speaker') {
      this.emit('start', { name: member.name, title: sessionStorage.title })
    }

    this.setState({status:'connected'})
  },
  disconnect() {
    this.setState({
      status: 'disconnected',
      title: 'disconnected',
      speaker: ''
    })
  },
  updateState(serverState) {
    this.setState(serverState)
  },
  joined(member) {
    sessionStorage.member = JSON.stringify(member); //we access the browsers sessionStorage and add a member node. the JSON.stringify turns the member into a json string.
    this.setState({member: member});
  },
  updateAudience(newAudience) {
    this.setState({audience: newAudience})
  },
  start(presentation) {
    if (this.state.member.type === 'speaker') {
      sessionStorage.title = presentation.title;
    }
    this.setState(presentation)
  },
  /*
  renderChild () {
    React.cloneElement(this.props.children, {
      emit: this.emit,
      title: this.state.title,
      status: this.state.status
    })},
    */

  render() {
    return (
      <div>
        <Header title={this.state.title} status={this.state.status} speaker={this.state.speaker} />
        {React.cloneElement(this.props.children, {audience: this.state.audience, title:this.state.title, status:this.state.status, member:this.state.member, emit:this.emit})}

      </div>
    )
  }
})
export default App;
