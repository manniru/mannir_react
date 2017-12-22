import React from 'react';
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";

const sendsms = (phone, message) => {
    const url = 'http://www.smslive247.com/http/index.aspx';
    let data = {
        cmd: 'sendquickmsg',
        owneremail: 'manniru@gmail.com',
        subacct: 'IKCOE',
        subacctpwd: 'Mannir@13131',
        message: message,
        sender: 'IKCOE',
        sendto: phone,
    }
    /*
    let fetchData = { 
        method: 'GET', 
        body: data,
        //headers: new Headers()
    }
    fetch(url, fetchData)
    .then(function(response) {
        console.log(response)
    });
    */

    /*
    return fetch(url, {method: "GET",body: data}).then(function(response) {
        response.status     //=> number 100–599
        response.statusText //=> String
        response.headers    //=> Headers
        response.url        //=> String
      
        return response.text()
      }, function(error) {
        error.message //=> String
      })
      */




}


/*
async function fetchAsync () {
    const url = 'http://www.smslive247.com/http/index.aspx';
    let data_post = {
        "cmd": 'sendquickmsg',
        "owneremail": 'manniru@gmail.com',
        "subacct": 'IKCOE',
        "subacctpwd": 'Mannir@13131',
        "message": 'Tesing Message From React JS ES6, Thank you',
        "sender": 'IKCOE',
        "sendto": '2348069354904',
    }

    let response = await fetch(url, {method: "GET",body: data_post});
    let data = await response.text();
    return data;
  }
  fetchAsync()
  .then(data => console.log(data))
  .catch(reason => console.log(reason.message))
  */


//console.log(sendsms('2348069354904', 'Tesing Message From React JS ES6, Thank you'))




class MyForm extends React.Component {
    constructor() {
       super();
       this.state = {rrr: null};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
       this.setState({rrr: event.target.value});
    }
   
    handleSubmit = (e) => {
        var time = (new Date).getTime();
    
        e.preventDefault();

    
        this.setState({
          rrr: this.state.rrr,
        });

        console.log(this.state.rrr)
      };

    render() {
       return( 
          <form onSubmit={this.handleSubmit}>
            
            <TextField
            id="rrr"
            name="rrr"
            label="Payer Name"
            placeholder="Payer Name"
            margin="normal"
            value={this.state.rrr}
          />  

            <Button raised color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
          </form>
       )
    }
  }

  export default MyForm