import React from 'react';
import PropTypes from 'prop-types';
import AgencyBranding, { AgencyBrandingProps } from './AgencyBranding';

export default function Listing({ agency }) {
  return (
    <div>
      <AgencyBranding {...agency} />
    </div>
  );
}

export const ListingProps = PropTypes.shape({
  agency: AgencyBrandingProps.isRequired,
});

Listing.propTypes = ListingProps.isRequired;
