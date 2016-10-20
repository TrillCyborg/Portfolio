import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  setVidSrc,
  setVidFilter,
  setVidStyle,
  setFilterSlider,
  toggleWebRCTAlert,
  setWebRTCError,
} from '../../actions/WebRTC';
import {
  BottomNav,
  FilterList,
  FilterSlider,
  VideoPlayer,
} from './';

const videoConstraints = {
  video: true,
  // audio: true,
};

const styles = {
  grid: {
    marginTop: 20,
  },
  videoInit: {
    transform: 'rotateY(180deg)',
    WebkitTransform: 'rotateY(180deg)',
    MozTransform: 'rotateY(180deg)',
  },
};

class WebRTC extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
    this.setFilter = this.setFilter.bind(this);
    this.handleFilterSlider = this.handleFilterSlider.bind(this);
    this.select = this.select.bind(this);
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
        this.props.setVidStyle(styles.videoInit);
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

  setFilter(filter) {
    if (filter) {
      const filterStyle = (filter === 'blur')
        ? `${filter}(${this.props.filterSlider * 10}px)`
        : `${filter}(${this.props.filterSlider})`;
      this.props.setVidFilter(filter);
      this.props.setVidStyle({
        ...styles.videoInit,
        WebkitFilter: filterStyle,
        filter: filterStyle,
      });
    } else {
      this.props.setVidFilter('');
      this.props.setVidStyle({
        ...styles.videoInit,
      });
    }
  }

  handleFilterSlider(event, value) {
    if (this.props.vidFilter) {
      const filterStyle = (this.props.vidFilter === 'blur')
        ? `${this.props.vidFilter}(${value * 10}px)`
        : `${this.props.vidFilter}(${value})`;
      this.props.setFilterSlider(value);
      this.props.setVidStyle({
        ...styles.videoInit,
        WebkitFilter: filterStyle,
        filter: filterStyle,
      });
    } else {
      this.props.setFilterSlider(value);
    }
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
        <Grid style={styles.grid}>
          <Row>
            <Col sm={3}>
              <Row>
                <FilterList setFilter={this.setFilter} />
              </Row>
              <Row>
                <FilterSlider
                  disabled={!this.props.vidFilter}
                  value={this.props.filterSlider}
                  onChange={this.handleFilterSlider}
                />
              </Row>
            </Col>
            <Col sm={6}>
              <VideoPlayer src={this.props.vidSrc} style={this.props.vidStyle} />
            </Col>
          </Row>
        </Grid>
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
  vidSrc: PropTypes.string,
  vidFilter: PropTypes.string,
  vidStyle: PropTypes.object,
  filterSlider: PropTypes.number,
  alertOpen: PropTypes.bool.isRequired,
  error: PropTypes.string,
  setVidSrc: PropTypes.func.isRequired,
  setVidFilter: PropTypes.func.isRequired,
  setVidStyle: PropTypes.func.isRequired,
  setFilterSlider: PropTypes.func.isRequired,
  toggleWebRCTAlert: PropTypes.func.isRequired,
  setWebRTCError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  vidSrc: state.webRTC.vidSrc,
  vidFilter: state.webRTC.vidFilter,
  vidStyle: state.webRTC.vidStyle,
  filterSlider: state.webRTC.filterSlider,
  alertOpen: state.webRTC.webRCTAlertOpen,
  error: state.webRTC.webRTCError,
});

export default connect(mapStateToProps, {
  setVidSrc,
  setVidFilter,
  setVidStyle,
  setFilterSlider,
  toggleWebRCTAlert,
  setWebRTCError,
})(WebRTC);
