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
import Header from './Header'
import RemitaDashboard from '../Remita/RemitaDashboard'

const Router1 = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/dashboard" component={RemitaDashboard} />
        <Route path="/youtube" component={MyYoutube} />
        <Route path="/RemitaForm" component={RemitaForm} />
        <Route path="/table" component={RemitaList} />
        <Route path="/" exact component={Header} />
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
  <div>
    <Header />
    <h1>Login Here</h1>
    </div>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Router1;