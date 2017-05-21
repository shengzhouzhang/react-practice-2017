import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ListingList from './ListingList';
import Listing from '../Listing';

describe('ListingList Component', () => {
  const LISTING = {
    agency: {
      agencyName: 'agency-name',
      logoUrl: 'logo-url',
      backgroundColor: 'background-color',
    },
  };
  const PROPS = {
    items: [LISTING, LISTING],
  };

  it('should render a list of Listing component', () => {
    const wrapper = shallow(<ListingList {...PROPS} />);
    const listings = wrapper.find(Listing);

    expect(listings).to.have.length(2);
    expect(listings.first().props()).to.eql(LISTING);
  });
});
