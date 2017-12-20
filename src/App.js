//import React from 'react';
//export default ({ name }) => <h1>BismillahirRahamanir Rahim {name}!</h1>;

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import RaisedButtonExampleSimple from './material-ui-next/RaisedButtonExampleSimple'
import Cards1 from 
'./material-ui-next/demos/Cards1'
import RemitaForm from './Remita/RemitaForm'
//import AsyncStorageExample from './material-ui-next/AsyncStorageExample'

import {
  Router,
  Route,
  Link,
  IndexRoute,
  browserHistory
} from 'react-router';

const style = {
  margin: 12,
};

const App = () => (
  <MuiThemeProvider>

    <RemitaForm />

  </MuiThemeProvider>
);

export default App;
