import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, history} from 'react-router';
import Home from './components/home'
/*
ReactDOM.render(
  <Router history={history}>
    <Route path='/' components={Home}/>
  </Router>
)
*/
ReactDOM.render(<Home/>, document.getElementById("react-app"))
