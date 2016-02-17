import React from 'react';
import {Link} from 'react-router'

var Header = React.createClass({
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <ul className='nav navbar-nav'>
            <li><Link to="">Home</Link></li>
            <li><Link to="">Sign Up</Link></li>
            <li><Link to="">Login</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
})
export default Header;
