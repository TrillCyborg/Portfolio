import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

const VideoPlayer = ({ src, style }) => (
  <Paper>
    <video width="100%" src={src} autoPlay style={style} />
  </Paper>
);

VideoPlayer.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object.isRequired,
};

export default VideoPlayer;
