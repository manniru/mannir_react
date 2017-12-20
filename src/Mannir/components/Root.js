import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import Home from './Home'
import About from './About'

//injectTapEventPlugin()
class Root extends React.Component {
  render() {

    return (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </MuiThemeProvider>
    );
  }
}

export default Root;

//ReactDOM.render(<Root />,document.getElementById('root'))