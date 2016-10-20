import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

const VideoPlayer = ({ src, style, reference }) => (
  <Paper>
    <video width="100%" src={src} autoPlay style={style} ref={reference} />
  </Paper>
);

VideoPlayer.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object.isRequired,
  reference: PropTypes.func.isRequired,
};

export default VideoPlayer;
