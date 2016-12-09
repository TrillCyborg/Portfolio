import React, { PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const getImages = photos => (
  photos.map((photo, i) => (
    <GridTile
      key={i}
      cols={1}
      rows={1}
    >
      <img alt="should load screenshot here" src={photo.url} style={{ ...photo.style }} />
    </GridTile>
  )).reverse()
);

const PhotoList = ({ photos }) => (
  <GridList cols={1} cellHeight={200} padding={5} style={{ height: '75vh', overflowY: 'auto' }}>
    {getImages(photos)}
  </GridList>
);

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default PhotoList;
