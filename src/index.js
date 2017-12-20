import React from 'react';
import { render } from 'react-dom';
import App from './App';
//import RaisedButtonExampleSimple from './material-ui-next/RaisedButtonExampleSimple';
import Button1 from './material-ui-next/demos/Button1'
import RemitaList from './Remita/RemitaList'
//import Paper1 from './Remita/Paper1'
import MyYoutube from './Mannir/MyYoutube'
import Router1 from './Mannir/Router1'
import Main from "./Mannir/Main";

//<VideoPlayer id={videoID} open={isVideoPlayerOpen} handleToggle={this.handleToggleVideoPlayer} />


/*
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


const App1 = () => (
  <div style={styles}>
    <App />
  </div>
);
*/

render(<Router1/>, document.getElementById('root'));
