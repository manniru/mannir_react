import React from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import firebase from '../firebase'
import Header from '../Mannir/Header'
import OverridesTheme from '../Mannir/components/OverridesTheme'
import Paper2 from '../Mannir/components/Paper2'
import data from './data'
import C1 from '../Mannir/test'
import config from './Remita'

const ref = firebase.database().ref('/react');


const num_rows = () => {
  async function fetchAsync () {
    let response = await fetch('http://localhost:3001/api/_application/count');
    let data = await response.json();
    return data;
    }
    
    return fetchAsync()
    .then(data => { return data[0].no_of_rows} )
    .catch(reason => console.log(reason.message)) 
}

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
      num2: '',
      num3: '',
      num4: '',
      num5: '',
      sum1: '',
      sum2: '',
      sum3: '',
      sum4: '',
      sum5: '',
      data: null,
      num_rows: 0,
    }

    //this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {

    var data_val = null;
    var num2 = null;
    
    ref.child("/remita").on('value', snapshot => {
      var data_val = snapshot.val();
      //console.log(data_val);
      var num = snapshot.numChildren();

      var sum1 = 0;
      var sum2 = 0;
      var sum3 = 0;
      var sum4 = 0;
      var sum5 = 0;



           
      if (data_val != null) {


        var data_1000 = Object.values(data_val).filter(function (d) {
          return d.amount === 1000;
        });


        var data_2000 = Object.values(data_val).filter(function (d) {
          return d.amount === 2000;
        });

        var data_3000 = Object.values(data_val).filter(function (d) {
          return d.amount === 3000;
        });

        var data_4000 = Object.values(data_val).filter(function (d) {
          return d.amount === 4000;
        });

        var data_5000 = Object.values(data_val).filter(function (d) {
          return d.amount === 5000;
        });

        var num1 = Object.keys(data_1000).length;
        var num2 = Object.keys(data_2000).length;
        var num3 = Object.keys(data_3000).length;
        var num4 = Object.keys(data_4000).length;
        var num5 = Object.keys(data_5000).length;

        var d1 = Object.keys(data_1000).map(function (d, i) {
          sum1 = sum1 + data_1000[d].amount
        });

        var d2 = Object.keys(data_2000).map(function (d, i) {
          sum2 = sum2 + data_2000[d].amount
        });

        var d3 = Object.keys(data_3000).map(function (d, i) {
          sum3 = sum3 + data_3000[d].amount
        });

        var d4 = Object.keys(data_4000).map(function (d, i) {
          sum4 = sum4 + data_4000[d].amount
        });

        var d5 = Object.keys(data_5000).map(function (d, i) {
          sum5 = sum5 + data_5000[d].amount
        });

      }
      

      this.setState({
        n1: num + '',
        data: data_val,
        num1: num1,
        num2: num2,
        num3: num3,
        num4: num4,
        num5: num5,
        sum1: sum1,
        sum2: sum2,
        sum3: sum3,
        sum4: sum4,
        sum5: sum5,
      });



    });

    num_rows().then(data => { this.setState({num_rows: data}); } )
  }

  render() {



    //console.log(config.merchantId)
    /*
    var data = this.state.data;
    //console.log(data);

    if (data != null) {
      var num1 = Object.keys(data).length;

      var sum1 = 0;
      var smallData = Object.keys(data).map(function (d, i) {
        sum1 = sum1 + data[d].amount
      });

      
      //console.log(JSON.stringify(data_5000));

      if (data_2000 != null) {
        var num2 = Object.keys(data_2000).length;
        

        console.log("num2="+num2+", sum2="+sum2)
      }

    }



*/

    


    return (
      <div>
      <Header />


      <br />
      <br />
      <Paper2 title="Remita 1000" num={this.state.num1} sum={this.state.sum1} /><br />
      <Paper2 title="Remita 2000" num={this.state.num2} sum={this.state.sum2} /><br />
      <Paper2 title="Remita 3000" num={this.state.num3} sum={this.state.sum3} /><br />
      <Paper2 title="Remita 4000" num={this.state.num4} sum={this.state.sum4} /><br />
      <Paper2 title="Remita 5000" num={this.state.num5} sum={this.state.sum5} /><br />
      <br />



      <Paper elevation={10} style={{ width: 300, height: 150, margin: 10, backgroundColor: 'green'}}>
          <Typography type="headline" gutterBottom align="center">
            Online Application
      </Typography>
          <Typography type="title" gutterBottom>
            IKCOE Number of Applications {this.state.num_rows}
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

      <C1 />

      </div>

    );
  }
}

export default RemitaDashboard;
