import React from 'react';
import Display from './parts/display';
import Join from "./parts/join";

var Audience = React.createClass({
  render() {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <h2> Join the session</h2>
          <Join emit={this.props.emit}/>
        </Display>
      </div>
    )
  }
});
export default Audience;
