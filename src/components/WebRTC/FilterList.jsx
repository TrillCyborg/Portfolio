import React, { PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

const FilterList = ({ setFilter }) => (
  <Paper>
    <List>
      <Subheader>Filters</Subheader>
      <ListItem primaryText="Speia" onClick={() => setFilter('sepia')} />
      <ListItem primaryText="Invert" onClick={() => setFilter('invert')} />
      <ListItem primaryText="Grayscale" onClick={() => setFilter('grayscale')} />
      <ListItem primaryText="Saturate" onClick={() => setFilter('saturate')} />
      <ListItem primaryText="Blur" onClick={() => setFilter('blur')} />
      <ListItem primaryText="None" onClick={() => setFilter('')} />
    </List>
  </Paper>
);

FilterList.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default FilterList;
