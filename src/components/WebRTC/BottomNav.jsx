import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { FaCamera, FaVideoCamera, FaMicrophone } from 'react-icons/lib/fa';

const styles = {
  bottomNavigationPaper: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
  },
};

const BottomNav = ({ select, selectedIndex }) => (
  <Paper zDepth={1} style={styles.bottomNavigationPaper}>
    <BottomNavigation selectedIndex={selectedIndex}>
      <BottomNavigationItem
        label="Filter Booth"
        icon={<FaCamera />}
        onTouchTap={() => select(0)}
      />
      <BottomNavigationItem
        label="Broadcast Room"
        icon={<FaVideoCamera />}
        onTouchTap={() => select(1)}
      />
      <BottomNavigationItem
        label="Vocal Transformer"
        icon={<FaMicrophone />}
        onTouchTap={() => select(2)}
      />
    </BottomNavigation>
  </Paper>
);

BottomNav.propTypes = {
  select: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default BottomNav;
