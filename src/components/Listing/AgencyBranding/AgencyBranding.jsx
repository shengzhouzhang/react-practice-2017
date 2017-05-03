import React from 'react';
import PropTypes from 'prop-types';

function AgencyBranding({ agencyName, logoUrl, backgroundColor }) {
  return (
    <div styles={{ backgroundColor }}>
      <img src={logoUrl} alt={agencyName} />
    </div>
  );
}

AgencyBranding.propTypes = {
  agencyName: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default AgencyBranding;
