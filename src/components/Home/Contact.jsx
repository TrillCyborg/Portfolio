import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { FaEnvelope, FaMapMarker } from 'react-icons/lib/fa';
import Card from '../Card';

const Contact = () => (
  <Card>
    <List>
      <ListItem primaryText="Jerusalem, IL" leftIcon={<FaMapMarker />} disabled />
      <ListItem primaryText="jasondwerner@gmail.com" leftIcon={<FaEnvelope />} disabled onClick={() => console.log('emailto')} />
    </List>
  </Card>
);

// <ListItem primaryText="@TheTrillCyborg" leftIcon={<FaFacebookSquare />} disabled />

export default Contact;
