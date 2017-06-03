import React from 'react';
import PropTypes from 'prop-types';

export default function PropertyDetails({ price, address, bedrooms, bathrooms, carSpaces }) {
  return (
    <div className="property-details">
      <p className="property-details__price">{price}</p>
      <p className="property-details__address">{address}</p>
      <p>
        <span className="property-details__bedrooms">{bedrooms}</span>
        <span className="property-details__bathrooms">{bathrooms}</span>
        <span className="property-details__car-spaces">{carSpaces}</span>
      </p>
    </div>
  );
}

export const PropertyDetailsProps = PropTypes.shape({
  price: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  carSpaces: PropTypes.number.isRequired,
});

PropertyDetails.propTypes = PropertyDetailsProps.isRequired;
