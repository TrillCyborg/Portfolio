import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';

const styles = {
  slider: {
    position: 'relative',
    top: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  sliderPaper: {
    marginTop: 20,
    height: 50,
  },
};

const FilterSlider = ({ disabled, value, onChange }) => (
  <Paper style={styles.sliderPaper}>
    <div>
      <Slider
        disabled={disabled}
        style={styles.slider}
        value={value}
        onChange={onChange}
      />
    </div>
  </Paper>
);

FilterSlider.propTypes = {
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterSlider;
