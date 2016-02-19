import React from 'react';
import io from 'socket.io-client';

import Header from './header.js'
import Home from './home';


var App = React.createClass({
  getInitialState() {
    return{
      status: 'disconnected',
      title: ''
    }
  },
  componentWillMount() {       //after the components have mounted they should connnect to the port 9000
    this.socket = io('http://localhost:9000')
    this.socket.on('connect', this.connect)
    this.socket.on('disconnect', this.disconnect)
    this.socket.on('welcome', this.welcome)
  },
  connect() {
    this.setState({status:'connected'})
  },
  disconnect() {
    this.setState({status: 'disconnected'})
  },
  welcome(serverState) {
    this.setState({title: serverState.title})
  },
  render() {
    return (
      <div>
        <Header title={this.state.title} status={this.state.status} />
        React.cloneElement(this.props.children, {globalState: this.state })
      </div>
    )
  }
})
export default App;
