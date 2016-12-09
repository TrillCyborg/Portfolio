import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Card from '../Card';
import techList from './techList.const';

const TechList = () => {
  function getList(type) {
    return techList[type].map((item, i) => (
      <ListItem
        key={i}
        disabled
        leftAvatar={<Avatar src={item.logo} style={{ backgroundColor: 'white' }} />}
        primaryText={item.name}
      />
    ));
  }
  return (
    <Card>
      <List>
        <Subheader>{"Tech I'm Using"}</Subheader>
        {getList(0)}
        <Subheader>{"Tech I'm Learning"}</Subheader>
        {getList(1)}
      </List>
    </Card>
  );
};

export default TechList;
