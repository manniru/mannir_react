import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Grid, Button, Typography } from 'material-ui';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const Cards1 = () => (
  <MuiThemeProvider>
    <Grid container gutter={40}>
      <Grid item sm={6} xs={12}>
        <Card>
          <CardContent>
            <Typography type="headline">Title</Typography>
            <Typography type="subheading">Location</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Card>
          <CardContent>
            <Typography type="headline">Title</Typography>
            <Typography type="subheading">Location</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Card>
          <CardContent>
            <Typography type="headline">Title</Typography>
            <Typography type="subheading">Location</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default Cards1;

//render(<App />, document.getElementById('root'));
