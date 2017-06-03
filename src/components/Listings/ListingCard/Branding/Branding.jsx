import React from 'react';
import PropTypes from 'prop-types';

export default function Branding({ logo: { url, alt }, color }) {
  return (
    <div className="branding" style={{ backgroundColor: color }}>
      <img className="branding__logo" src={url} alt={alt} />
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
