import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { FaAngleDown } from 'react-icons/lib/fa';
import { toggleAppMenu, setAppMenuAnchorEl } from '../actions/App';

const styles = {
  link: {
    color: '#fff',
    marginLeft: 10,
  },
};

const MenuItemLink = ({ to, label, onClick }) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <MenuItem primaryText={label} onClick={onClick} />
  </Link>
);

class AppButtonMenu extends Component {
  constructor(props) {
    super(props);
    this.handleButtonTouchTap = this.handleButtonTouchTap.bind(this);
  }

  handleButtonTouchTap(event) {
    event.preventDefault();
    this.props.setAppMenuAnchorEl(event.currentTarget);
    this.props.toggleAppMenu();
  }

  render() {
    const { link } = styles;
    return (
      <span>
        <FlatButton
          label="Apps"
          onTouchTap={this.handleButtonTouchTap}
          style={link}
          icon={<FaAngleDown />}
          labelPosition="before"
        />
        <Popover
          open={this.props.appMenuOpen}
          anchorEl={this.props.appMenuAnchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.props.toggleAppMenu}
        >
          <Menu>
            <MenuItemLink to="/Chat" label="Chat" onClick={this.props.toggleAppMenu} />
            <MenuItemLink to="/AlbumSearch" label="Album Search" onClick={this.props.toggleAppMenu} />
            <MenuItemLink to="/Top10" label="Top 10" onClick={this.props.toggleAppMenu} />
            <MenuItemLink to="/WebRTC" label="WebRTC" onClick={this.props.toggleAppMenu} />
            <MenuItemLink to="/MIDIMane" label="MIDI Mane" onClick={this.props.toggleAppMenu} />
          </Menu>
        </Popover>
      </span>
    );
  }
}

MenuItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

AppButtonMenu.propTypes = {
  appMenuOpen: PropTypes.bool.isRequired,
  appMenuAnchorEl: PropTypes.object,
  toggleAppMenu: PropTypes.func.isRequired,
  setAppMenuAnchorEl: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appMenuOpen: state.app.appMenuOpen,
  appMenuAnchorEl: state.app.appMenuAnchorEl,
});

export default connect(mapStateToProps, { toggleAppMenu, setAppMenuAnchorEl })(AppButtonMenu);
