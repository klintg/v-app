import React from 'react';
import {Link} from 'react-router'

var Header = React.createClass({
  propTypes: {
    title:React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <ul className='nav navbar-nav'>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Sign Up</Link></li>
              <li><Link to="#">Login</Link></li>
            </ul>
          </div>
        </nav>

        <header>
          <div className='row'>
            <div className = 'col-xs-10'>
              <h1>{this.props.title}</h1>
              <p>{this.props.speaker}</p>
            </div>
            <div className='col-xs-2'>
              <span id='connection-status' className={this.props.status}></span>
            </div>
          </div>
        </header>
      </div>
    )
  }
})
export default Header;
