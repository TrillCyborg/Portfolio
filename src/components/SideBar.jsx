import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const IconElementLeft = ({ onClick }) => (
  <IconButton onClick={onClick}><NavigationArrowBack color={'white'} /></IconButton>
);

const SideBar = ({ isOpen, toggleDrawer }) => (
  <Drawer open={isOpen}>
    <AppBar
      title="TrillCyborg"
      iconElementLeft={<IconElementLeft onClick={toggleDrawer} />}
    />
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
  </Drawer>
);

IconElementLeft.propTypes = {
  onClick: PropTypes.func.isRequired,
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default SideBar;
