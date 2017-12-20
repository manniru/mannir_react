import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from "material-ui/Button";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
        >
          <AppBar title="Title" onLeftIconButtonTouchTap={this.toggleDrawer} />
          <MenuItem
            primaryText="home"
            containerElement={<Link to="/" />}
            onTouchTap={() => {
              console.log('going home')
              alert('going home!')
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="about"
            containerElement={<Link to="/about" />}
            onTouchTap={() => {
              console.log('about')
              alert('going to about page!')
              this.toggleDrawer()
            }}
          />
        </Drawer>

        <div style={{ textAlign: 'center' }}>
          {this.props.children}

          <Button raised onTouchTap={this.toggleDrawer} color="primary" onClick={this.handleSubmit}>
            Toggle Drawer
          </Button>


        </div>

      </div>
    )
  }
}

export default App