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

function Paper1(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>

      <br />

      <Paper style={{
        padding: 20,
        marginBottom: 40
      }}>

        <form>

          <TextField
            id="name"
            label="Name"
            margin="normal"
          />
          <br />

          <Button raised color="primary">
            Submit
          </Button>

        </form>

      </Paper>

      <br />
      <Paper>

        <TextField
          id="orderID"
          label="With placeholder"
          placeholder="Placeholder"
          margin="normal"
        />

        <br />
        <Button raised color="primary">
          Submit
          </Button>

      </Paper>

    </div>
  );
}

Paper1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paper1);