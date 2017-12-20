import React from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import firebase from '../firebase'
import Header from '../Mannir/Header'
import OverridesTheme from '../Mannir/components/OverridesTheme'
import Paper2 from '../Mannir/components/Paper2'
const ref = firebase.database().ref('/react');

const paper_style = {
  margin: 10,
  width: 200,
  height: 100,
  
}

class RemitaDashboard extends React.Component {
  
  constructor() {
    super();
    this.state = {
      p1: '',
      num1: '',
    }

    //this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    
    ref.child("/remita").on('value', snapshot => {
      var num = snapshot.numChildren();
      this.setState({
        n1: num + '',
        num1: num + '',
        })
    });
  }

  render() {
    console.log(this.state.n1)
    return (
      <div>
      <Header />


      <br />
      <br />
      <Paper2 num={this.state.num1} sum="4,151,001" /><br />
      <Paper2 num="4,152" sum="4,151,002" /><br />
      <Paper2 num="4,153" sum="4,151,003" /><br />
      <Paper2 num="4,154" sum="4,151,004" /><br />
      <Paper2 num="4,155" sum="4,151,005" /><br />
      <br />



      <Paper elevation={10} style={{ width: 300, height: 150, margin: 10, backgroundColor: 'green'}}>
          <Typography type="headline" gutterBottom align="center">
            Online Application
      </Typography>
          <Typography type="title" gutterBottom>
            Title
      </Typography>
          <Typography type="subheading" gutterBottom>
            Subheading
      </Typography>
          <Typography type="body2" gutterBottom>
            Body 2
      </Typography>
          <Typography type="body1" gutterBottom align="right">
            Body 1
      </Typography>
      </Paper>



      </div>

    );
  }
}

export default RemitaDashboard;
