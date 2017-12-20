//import React from 'react';
//export default ({ name }) => <h1>BismillahirRahamanir Rahim {name}!</h1>;

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonExampleSimple from './material-ui-next/RaisedButtonExampleSimple'
import ListDividers from './material-ui-next/demos/ListDividers'

const style = {
  margin: 12,
};

const App = () => (
  <MuiThemeProvider>

    <ListDividers />

  </MuiThemeProvider>
);

export default App;
