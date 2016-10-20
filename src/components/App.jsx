import React, { PropTypes } from 'react';
import NavBar from './NavBar';

const App = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
