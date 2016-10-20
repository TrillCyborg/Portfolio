import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { setVidFilter, setVidStyle, setFilterSlider } from '../../actions/WebRTC';
import { FilterList, FilterSlider, VideoPlayer } from './';

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
            <VideoPlayer src={this.props.vidSrc} style={this.props.vidStyle} />
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
  setVidFilter: PropTypes.func.isRequired,
  setVidStyle: PropTypes.func.isRequired,
  setFilterSlider: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  vidSrc: state.webRTC.vidSrc,
  vidFilter: state.webRTC.vidFilter,
  vidStyle: state.webRTC.vidStyle,
  filterSlider: state.webRTC.filterSlider,
});

export default connect(mapStateToProps, {
  setVidFilter,
  setVidStyle,
  setFilterSlider,
})(FilterBooth);
