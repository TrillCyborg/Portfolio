import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import {
  setVidFilter,
  setVidStyle,
  setVidElement,
  setFilterSlider,
  setCanvasElement,
  addPhoto,
} from '../../actions/WebRTC';
import {
  FilterList,
  FilterSlider,
  VideoPlayer,
  PhotoList,
} from './';

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

class FilterBooth extends Component {
  constructor(props) {
    super(props);
    this.setFilter = this.setFilter.bind(this);
    this.handleFilterSlider = this.handleFilterSlider.bind(this);
    this.capturePhoto = this.capturePhoto.bind(this);
  }

  componentWillMount() {
    this.setFilter(this.props.vidFilter);
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

  capturePhoto() {
    const context = this.props.canvasElement.getContext('2d');
    context.drawImage(this.props.vidElement, 0, 0, 345, 258);
    this.props.addPhoto({
      url: this.props.canvasElement.toDataURL('image/png'),
      style: {
        WebkitFilter: this.props.vidStyle.WebkitFilter,
        filter: this.props.vidStyle.filter,
      },
    });
  }

  render() {
    return (
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
            <VideoPlayer
              src={this.props.vidSrc}
              style={this.props.vidStyle}
              reference={this.props.setVidElement}
            />
            <RaisedButton label="Capture Image" fullWidth onClick={this.capturePhoto} />
            <canvas id="canvas" style={{ display: 'none' }} ref={this.props.setCanvasElement} />
          </Col>
          <Col sm={3}>
            <PhotoList photos={this.props.photos} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

FilterBooth.propTypes = {
  vidFilter: PropTypes.string,
  filterSlider: PropTypes.number.isRequired,
  vidSrc: PropTypes.string,
  vidStyle: PropTypes.object,
  vidElement: PropTypes.element,
  canvasElement: PropTypes.element,
  photos: PropTypes.array.isRequired,
  setVidFilter: PropTypes.func.isRequired,
  setVidStyle: PropTypes.func.isRequired,
  setVidElement: PropTypes.func.isRequired,
  setCanvasElement: PropTypes.func.isRequired,
  setFilterSlider: PropTypes.func.isRequired,
  addPhoto: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  vidSrc: state.webRTC.vidSrc,
  vidFilter: state.webRTC.vidFilter,
  vidStyle: state.webRTC.vidStyle,
  vidElement: state.webRTC.vidElement,
  photos: state.webRTC.photos,
  canvasElement: state.webRTC.canvasElement,
  filterSlider: state.webRTC.filterSlider,
});

export default connect(mapStateToProps, {
  setVidFilter,
  setVidStyle,
  setVidElement,
  setCanvasElement,
  setFilterSlider,
  addPhoto,
})(FilterBooth);
