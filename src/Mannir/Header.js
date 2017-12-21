import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom'
import Menu, { MenuItem } from 'material-ui/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import FolderIcon from 'material-ui-icons/Folder';
//import injectTapEventPlugin from 'react-tap-event-plugin'
//injectTapEventPlugin()
//import DemoAutoPlay from './components/DemoAutoPlay'

const styles = {
  root: {
    width: '100%',
    margin: -8,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      auth: true,
      anchorEl: null,
    }


  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

  const { classes } = this.props;
  const { auth, anchorEl } = this.state;
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={styles}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Mannir eSystems
          </Typography>
          <Button color="contrast" component={Link} to="/">Home</Button>
          <Button color="contrast" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="contrast" component={Link} to="/RemitaForm">Form</Button>
          <Button color="contrast" component={Link} to="/table">Table</Button>
        
        
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="contrast"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem containerElement={<Link to="/youtube" />}>Youtube</MenuItem>
            
              <MenuItem linkButton={true} href="link/to/some/page" primaryText="Sample Link">
              </MenuItem>


              <MenuItem
                primaryText="about"
                containerElement={<Link to="/about" />}
                onTouchTap={() => {
                  console.log('about')
                  //alert('going to about page!')
                }}
              ></MenuItem>

            </Menu>

            
          </div>
        
        </Toolbar>
      </AppBar>

      
    </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);