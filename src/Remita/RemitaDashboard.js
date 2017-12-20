import React from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import firebase from '../firebase'
import Header from '../Mannir/Header'
import OverridesTheme from '../Mannir/components/OverridesTheme'
import Paper2 from '../Mannir/components/Paper2'
///import data from './data'

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
      data: null,
    }

    //this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    
    ref.child("/remita").on('value', snapshot => {
      var data_val = snapshot.val();
      var num = snapshot.numChildren();
      this.setState({
        n1: num + '',
        num1: num + '',
        data: data_val,
        })
    });
  }

  render() {
    //console.log(this.state.n1)
    var data = this.state.data;
    //console.log(data);

    if (data != null) {
      var num1 = Object.keys(data).length;

      var sum1 = 0;
      var smallData = Object.keys(data).map(function (d, i) {
        sum1 = sum1 + data[d].amount
      });

    }
    

    return (
      <div>
      <Header />


      <br />
      <br />
      <Paper2 num={this.state.num1} sum={sum1} /><br />
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
