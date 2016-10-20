import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen: false };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  }

  render() {
    return (
      <div>
        <NavBar toggleDrawer={this.toggleDrawer} />
        <SideBar isOpen={this.state.isDrawerOpen} toggleDrawer={this.toggleDrawer} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
