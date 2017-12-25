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
import RemitaStatus from '../Remita/RemitaStatus'
import Header from './Header'
import RemitaDashboard from '../Remita/RemitaDashboard'
import Test1 from '../Tests/Test1'
import MyForm from '../Examples/MyForm'
import SMS from './SMS'
import Accounts from './Accounts'
import Local from '../Examples/Local'
//import PDF1 from './PDF1'

const Router1 = () => (
  <Router>
    <div>
      <Switch>
      <Route path="/status" component={RemitaStatus} />
      <Route path="/status1" component={MyForm} />
      <Route path="/test1" component={Test1} />
      <Route path="/sms" component={SMS} />
      <Route path="/acc" component={Accounts} />
      <Route path="/local" component={Local} />
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