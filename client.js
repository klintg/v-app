import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import { createHashHistory} from 'history'
import App from './components/app';
import Home from './components/home'
import Audience from './components/audience';
import Board from './components/board'
import Speaker from './components/speaker'
import Notfound from './components/notfound';


/*
ReactDOM.render(
  <Router history={history}>
    <Route path='/' components={Home}/>
  </Router>
)
*/
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
ReactDOM.render((
  <Router history={appHistory}>
    <Route  path='/'component={App}>
      <IndexRoute component={Home} />
      <Route path='audience' component={Audience} />
      <Route path='board' component={Board} />
      <Route path='speaker' component={Speaker} />
      <Route path='*' component={Notfound}/>
    </Route>
  </Router>
), document.getElementById("react-app"))
