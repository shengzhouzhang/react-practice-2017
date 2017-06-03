import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ListingCard from './ListingCard';
import Branding from './Branding';
import MainPhoto from './MainPhoto';
import PropertyDetails from './PropertyDetails';

describe('ListingCard Component', () => {
  const PROPS = {
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


  it('should render Branding, MainPhoto, and PropertyDetails', () => {
    const wrapper = shallow(<ListingCard {...PROPS} />);
    const branding = wrapper.find(Branding);
    const mainPhoto = wrapper.find(MainPhoto);
    const propertyDetails = wrapper.find(PropertyDetails);

    expect(branding.props()).to.eql({
      color: '#2c383d',
      logo: {
        url: 'https://i1.au.reastatic.net/agencylogo/DIMGNH/12/20160823153934.gif',
        alt: 'Coronis - Coorparoo',
      },
    });

    expect(mainPhoto.props()).to.eql({
      url: 'https://i2.au.reastatic.net/640x480/4cd186cdfca5941d6a72e5a58b3b8bb1e490df705f38168e491524f3120b5c9f/main.jpg',
      alt: '6/12 East Street, Camp Hill, Qld 4152',
    });

    expect(propertyDetails.props()).to.eql({
      price: 'Offers Over $439,000',
      address: '6/12 East Street, Camp Hill, Qld 4152',
      bedrooms: 3,
      bathrooms: 1,
      carSpaces: 2,
    });
  });
});
