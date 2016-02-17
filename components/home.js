import React from 'react';
import Footer from './footer.js'
import Header from './header.js'
import Voting from './voting'
var Home = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <h1> this is the home page</h1>
        <Voting/>
        <Footer/>
      </div>
    )
  }
})
export default Home;
