import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import MyYoutube from './MyYoutube'
import RemitaList from '../Remita/RemitaList'
import RemitaForm from '../Remita/RemitaForm'

const Router1 = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/RemitaForm">RemitaForm</Link></li>
        <li><Link to="/remitalist">RemitaList</Link></li>
        <li><Link to="/youtube">Youtube</Link></li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/youtube" component={MyYoutube} />
        <Route path="/RemitaForm" component={RemitaForm} />
        <Route path="/remitalist" component={RemitaList} />
        <Route path="/" exact component={Home} />
        <Redirect from="/old-match" to="/will-match" />
        <Route path="/will-match" component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the
    first child <code>&lt;Route></code> that
    matches. A <code>&lt;Route></code> with
    no <code>path</code> always matches.
  </p>
)

const Login = () => (
  <h1>Login Here</h1>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Router1;