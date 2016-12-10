import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/lib/fa';
import AppButtonMenu from './AppButtonMenu';

const profilePic = 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xat1/v/t1.0-1/p160x160/13892066_1689982057685048_7847739311645273433_n.jpg?oh=276fbaa56333ef7ee32a4f7992736e93&oe=589901B9&__gda__=1486771413_79fbfb156540a732d47e334ed6177b54';

const styles = {
  icon: {
    size: 24,
    color: '#fff',
  },
  myAvatar: {
    marginTop: 4,
    marginLeft: 20,
    marginRight: 8,
  },
  link: {
    color: '#fff',
  },
};

const onClickLinkedIn = () => {
  console.log('Clicked LinkedIn');
};

const onClickGithub = () => {
  console.log('Clicked Github');
};

const onClickTwitter = () => {
  console.log('Clicked Twitter');
};

const IconLink = ({ url, children, onClick, tooltip }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <IconButton onClick={onClick} tooltip={tooltip}>
      {children}
    </IconButton>
  </a>
);

const IconRow = () => {
  const { icon } = styles;
  return (
    <div style={{ marginRight: 10 }}>
      <IconLink url="https://il.linkedin.com/in/jason-werner-4658b68a" onClick={onClickLinkedIn} tooltip="Pro Tip: Offer A Job">
        <FaLinkedin size={icon.size} color={icon.color} />
      </IconLink>
      <IconLink url="https://twitter.com/trillcyborg" onClick={onClickTwitter}>
        <FaTwitter size={icon.size} color={icon.color} />
      </IconLink>
      <IconLink url="https://github.com/TrillCyborg" onClick={onClickGithub}>
        <FaGithub size={icon.size} color={icon.color} />
      </IconLink>
    </div>
  );
};

const LinkRow = () => {
  const { link } = styles;
  return (
    <div>
      <Link to="/"><FlatButton label="Jason Werner" style={link} /></Link>
      <AppButtonMenu />
    </div>
  );
};

const NavBar = () => (
  <AppBar
    title="Jason Werner"
    showMenuIconButton={false}
    iconElementRight={<IconRow />}
  />
);
// iconElementLeft={<Avatar src={profilePic} style={styles.myAvatar} />}
// title={<LinkRow />}

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.string,
};

export default NavBar;
