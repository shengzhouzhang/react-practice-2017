import React from 'react';
import Form from './Form';
import ListingRepository from '../../repositories/Listing';

export default function Admin() {
  return (<Form createListing={ListingRepository.createListing} />);
}
