import React from 'react';
import PropTypes from 'prop-types';
import Branding, { BrandingProps } from './Branding';

export default function Listing({ branding }) {
  return (
    <div>
      <Branding {...branding} />
    </div>
  );
}

export const ListingProps = PropTypes.shape({
  branding: BrandingProps.isRequired,
});

Listing.propTypes = ListingProps.isRequired;
