import React from 'react';
import PropTypes from 'prop-types';

export default function Branding({ logo: { url, alt }, color }) {
  return (
    <div styles={{ backgroundColor: color }}>
      <img src={url} alt={alt} />
    </div>
  );
}

export const BrandingProps = PropTypes.shape({
  logo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
});

Branding.propTypes = BrandingProps.isRequired;
