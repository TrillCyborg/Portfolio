import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { setStream, setVidSrc, toggleWebRCTAlert, setWebRTCError } from '../../actions/WebRTC';
import { FilterBooth, BroadcastRoom, VocalTransformer, BottomNav } from './';

const videoConstraints = {
  video: true,
  // audio: true,
};

class WebRTC extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      stream: null,
    };
    this.select = this.select.bind(this);
    this.getMainComponent = this.getMainComponent.bind(this);
  }

  componentWillMount() {
    navigator.getUserMedia = (
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
    );

    if (navigator.getUserMedia) {
      navigator.getUserMedia(videoConstraints, (stream) => {
        this.props.setStream(stream);
        this.props.setVidSrc(window.URL.createObjectURL(stream));
      }, () => {
        this.props.setWebRTCError('Please enable the browser to access your video camera');
        this.props.toggleWebRCTAlert();
      });
    } else {
      this.props.setWebRTCError('getUserMedia() is not supported in your browser');
      this.props.toggleWebRCTAlert();
    }
  }

  componentWillUnmount() {
    if (this.props.stream) {
      this.props.stream.getAudioTracks().forEach((track) => {
        track.stop();
      });

      this.props.stream.getVideoTracks().forEach((track) => {
        track.stop();
      });
    }
  }

  getMainComponent() {
    const components = [<FilterBooth />, <BroadcastRoom />, <VocalTransformer />];
    return components[this.state.selectedIndex];
  }

  select(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    const actions = [
      <FlatButton
        label="Dismiss"
        primary
        onTouchTap={this.props.toggleWebRCTAlert}
      />,
    ];

    return (
      <div>
        {this.getMainComponent()}
        <BottomNav select={this.select} selectedIndex={this.state.selectedIndex} />
        <Dialog
          title="Video Stream Failed"
          actions={actions}
          modal={false}
          open={this.props.alertOpen}
          onRequestClose={this.props.toggleWebRCTAlert}
        >
          {this.props.error}
        </Dialog>
      </div>
    );
  }
}

WebRTC.propTypes = {
  stream: PropTypes.object,
  alertOpen: PropTypes.bool.isRequired,
  error: PropTypes.string,
  setStream: PropTypes.func.isRequired,
  setVidSrc: PropTypes.func.isRequired,
  toggleWebRCTAlert: PropTypes.func.isRequired,
  setWebRTCError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stream: state.webRTC.stream,
  vidSrc: state.webRTC.vidSrc,
  alertOpen: state.webRTC.webRCTAlertOpen,
  error: state.webRTC.webRTCError,
});

export default connect(mapStateToProps, {
  setStream,
  setVidSrc,
  toggleWebRCTAlert,
  setWebRTCError,
})(WebRTC);
