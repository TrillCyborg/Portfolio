import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

const Card = ({ children }) => (
  <Paper style={{ marginBottom: 20 }}>
    {children}
  </Paper>
);

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
