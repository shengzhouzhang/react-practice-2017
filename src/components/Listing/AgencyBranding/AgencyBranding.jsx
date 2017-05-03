import React from 'react';
import PropTypes from 'prop-types';

export default function AgencyBranding({ agencyName, logoUrl, backgroundColor }) {
  return (
    <div styles={{ backgroundColor }}>
      <img src={logoUrl} alt={agencyName} />
    </div>
  );
}

export const AgencyBrandingProps = PropTypes.shape({
  agencyName: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
});

AgencyBranding.propTypes = AgencyBrandingProps.isRequired;
