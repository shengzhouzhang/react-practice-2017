import React from 'react';
import Form from './Form';

function createListing(data) {
  console.log('createListing', data);
}

export default function Admin() {
  return (<Form createListing={createListing} />);
}
