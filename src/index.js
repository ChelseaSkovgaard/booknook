import React    from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App      from './App'
import Home     from './components/Home.js'
import About    from './components/About.js'
import Projects from './components/Projects.js'
import NotFound from './components/NotFound.js'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='projects' component={Projects} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'))
