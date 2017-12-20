import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";
import Divider from 'material-ui/Divider';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import firebase from '../firebase'
import Header from '../Mannir/Header'

var faker = require('faker');

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class RemitaForm extends React.Component {

  constructor() {
    super();
    this.state = {
      serviceType: '',
      payerName: '',
      payerPhone: '',
      payerEmail: '',
      amount: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleDemo = () => {
    var amounts = [1000, 2000, 3000, 4000, 5000]

    this.setState({
      open: true,
      serviceType: '4430731',
      payerName: faker.name.findName(),
      payerPhone: faker.phone.phoneNumberFormat(),
      payerEmail: faker.internet.email(),
      amount: faker.random.arrayElement(amounts),
      });
  };

  handleSubmit = (e) => {
    var time = (new Date).getTime();

    e.preventDefault();
    const itemsRef = firebase.database().ref('/react/remita/' + time);
    const item = {
      servicetype: this.state.serviceType,
      name: this.state.payerName,
      phone: this.state.payerPhone,
      mail: this.state.payerEmail,
      amount: this.state.amount
    }
    itemsRef.set(item);
    console.log('records saved!');

    this.setState({
      serviceType: null,
      payerName: null,
      payerPhone: null,
      payerEmail: null,
      amount: null,
    });
  };

  handleOpen = () => {
    console.log("handleOpen")
    //this.setState({ open: true });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
  return (
    <div>
    <Header />
      <form>
        <Paper style={{
          padding: 20,
          marginBottom: 40
        }}>
        <h2>Remita Form</h2>

        <InputLabel htmlFor="serviceType">Service Type: </InputLabel>
          
          <Select
            value={this.state.serviceType}
            onChange={this.handleChange}
            input={<Input name="serviceType" id="serviceType" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="4430731">Demo</MenuItem>
            <MenuItem value="Application">Application</MenuItem>
            <MenuItem value="Registration">Registration</MenuItem>
          </Select>
          <br />

          <TextField
            id="payerName"
            name="payerName"
            label="Payer Name"
            placeholder="Payer Name"
            margin="normal"
            value={this.state.payerName}
          />
          <br />

          <TextField
            id="payerPhone"
            name="payerPhone"
            label="Payer Phone"
            placeholder="Payer Phone"
            margin="normal"
            value={this.state.payerPhone}

          />
          <br />

          <TextField
            id="payerEmail"
            name="payerEmail"
            label="Payer Email"
            placeholder="Payer Email"
            margin="normal"
            value={this.state.payerEmail}

          />
          <br />

          <TextField
            id="amount"
            name="amount"
            label="Amount"
            margin="normal"
            value={this.state.amount}

          />
          <br />

          <Button raised color="primary" onClick={this.handleDemo}>
            Demo
          </Button>

          <Button raised color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>



        </Paper>

      </form>
    </div>
    );
  }
}


RemitaForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemitaForm);