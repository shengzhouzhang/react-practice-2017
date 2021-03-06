import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Listings from './Listings';
import ListingCard from './ListingCard';

describe('Listings Component', () => {
  const LISTING = {
    branding: {
      color: '#2c383d',
      logo: {
        url: 'https://i1.au.reastatic.net/agencylogo/DIMGNH/12/20160823153934.gif',
        alt: 'Coronis - Coorparoo',
      },
    },
    mainPhoto: {
      url: 'https://i2.au.reastatic.net/640x480/4cd186cdfca5941d6a72e5a58b3b8bb1e490df705f38168e491524f3120b5c9f/main.jpg',
      alt: '6/12 East Street, Camp Hill, Qld 4152',
    },
    propertyDetails: {
      price: 'Offers Over $439,000',
      address: '6/12 East Street, Camp Hill, Qld 4152',
      bedrooms: 3,
      bathrooms: 1,
      carSpaces: 2,
    },
  };
  const PROPS = {
    items: [LISTING, LISTING],
  };

  it('should render a list of Listing component', () => {
    const wrapper = shallow(<Listings {...PROPS} />);
    const listings = wrapper.find(ListingCard);

    expect(listings).to.have.length(2);
    expect(listings.first().props()).to.eql(LISTING);
  });
});
