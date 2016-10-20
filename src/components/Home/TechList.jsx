import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Card from '../Card';

const reactLogo = 'https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png';
const firebaseLogo = 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png';
const javascriptLogo = 'http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg';
const nodejsLogo = 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg';
const reduxLogo = 'http://relinchos.com/assets/img/logo-tools/img-logo-redux.png';
const mongoDBLogo = 'http://www.mongodb.sk/images/mongodb-leaf.png';
const webRTCLogo = 'https://webrtc.org/assets/images/webrtc-logo-vert-retro-255x305.png';

const TechList = () => (
  <Card>
    <List>
      <Subheader>{"Tech I'm Using"}</Subheader>
      <ListItem
        disabled
        leftAvatar={<Avatar src={javascriptLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="JavaScript"
      />
      <ListItem
        disabled
        leftAvatar={<Avatar src={reactLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="React"
      />
      <ListItem
        disabled
        leftAvatar={<Avatar src={reduxLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="Redux"
      />
      <ListItem
        disabled
        leftAvatar={<Avatar src={nodejsLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="Node.js"
      />
      <ListItem
        disabled
        leftAvatar={<Avatar src={mongoDBLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="MongoDB"
      />
      <Subheader>{"Tech I'm Learning"}</Subheader>
      <ListItem
        disabled
        leftAvatar={<Avatar src={firebaseLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="Firebase"
      />
      <ListItem
        disabled
        leftAvatar={<Avatar src={reactLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="React Native"
      />
      <ListItem
        disabled
        leftAvatar={<Avatar src={webRTCLogo} style={{ backgroundColor: 'white' }} />}
        primaryText="WebRTC"
      />
    </List>
  </Card>
);

export default TechList;
