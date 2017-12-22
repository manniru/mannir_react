import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class RemitaStatus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          Your RRR Status is: Pending
        </Typography>
        <Typography component="p">
          Your Fullname is: fullname, Amoun: amount
        </Typography>
      </Paper>

      <br />

      <Paper style={{
        padding: 20,
        marginBottom: 40
      }}>

        <form onSubmit={this.handleSubmit}>

          <TextField
            id="rrr"
            name="rrr"
            label="Enter your RRR"
            margin="normal"
            value={this.state.value} onChange={this.handleChange}
          />
          <br />

          <Button raised color="primary">
            Submit
          </Button>

          <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        </form>

      </Paper>

    </div>
 );
}
}

RemitaStatus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemitaStatus);