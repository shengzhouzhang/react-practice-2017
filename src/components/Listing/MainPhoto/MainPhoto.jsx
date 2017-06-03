import React from 'react';
import PropTypes from 'prop-types';

export default function MainPhoto({ url, alt }) {
  return (
    <div className="main-photo">
      <img className="main-photo__image" src={url} alt={alt} />
    </div>
  );
}

export const MainPhotoProps = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

MainPhoto.propTypes = MainPhotoProps.isRequired;
