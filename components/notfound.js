import React from 'react';
import {Router, Route,Link} from 'react-router';

var Notfound = React.createClass({
  render() {
    return (
      <div id="not-found">
        <h1>Whoops....</h1>
        <p> We cannot find the page that you have requested.</p>
        <p>Were you looking for one of this</p>

        <Link> to="/">Join as Audience</Link>
        <Link> to="/speaker">Start the presentation </Link>
        <Link> to="/board"> View the board</Link>
      </div>
    )
  }
});
module.exports = Notfound;
