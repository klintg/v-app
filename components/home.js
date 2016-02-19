import React from 'react';
import Footer from './footer.js'

//import Voting from './voting'
import Exp from './exp.js'


var Home = React.createClass({
  render() {
    return (
      <div>

        <h1> this is the home page</h1>

        <Exp/>
        <Footer/>
      </div>
    )
  }
})
export default Home;
