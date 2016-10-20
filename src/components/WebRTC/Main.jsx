import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { setVidSrc, toggleWebRCTAlert, setWebRTCError } from '../../actions/WebRTC';
import { FilterBooth, BroadcastRoom, BottomNav } from './';

const videoConstraints = {
  video: true,
  // audio: true,
};

class WebRTC extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
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
    // Turn of Stream
  }

  getMainComponent() {
    const components = [<FilterBooth />, <BroadcastRoom />];
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
  alertOpen: PropTypes.bool.isRequired,
  error: PropTypes.string,
  setVidSrc: PropTypes.func.isRequired,
  toggleWebRCTAlert: PropTypes.func.isRequired,
  setWebRTCError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  vidSrc: state.webRTC.vidSrc,
  alertOpen: state.webRTC.webRCTAlertOpen,
  error: state.webRTC.webRTCError,
});

export default connect(mapStateToProps, {
  setVidSrc,
  toggleWebRCTAlert,
  setWebRTCError,
})(WebRTC);
