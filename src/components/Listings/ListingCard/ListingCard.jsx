import React from 'react';
import PropTypes from 'prop-types';
import Branding, { BrandingProps } from './Branding';
import MainPhoto, { MainPhotoProps } from './MainPhoto';
import PropertyDetails, { PropertyDetailsProps } from './PropertyDetails';

export default function ListingCard({ branding, mainPhoto, propertyDetails }) {
  return (
    <div className="listing-card">
      <Branding {...branding} />
      <MainPhoto {...mainPhoto} />
      <PropertyDetails {...propertyDetails} />
    </div>
  );
}

export const ListingCardProps = PropTypes.shape({
  branding: BrandingProps.isRequired,
  mainPhoto: MainPhotoProps.isRequired,
  propertyDetails: PropertyDetailsProps.isRequired,
});

ListingCard.propTypes = ListingCardProps.isRequired;
