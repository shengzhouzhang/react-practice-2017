import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PropertyDetails from './PropertyDetails';

describe('PropertyDetails Component', () => {
  const PROPS = {
    price: '$3,750,000',
    address: '4D Duke Street, Balmain East',
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
  };

  it('should render price, address, bedrooms, bathrooms, and car spaces', () => {
    const wrapper = shallow(<PropertyDetails {...PROPS} />);
    const price = wrapper.find('.property-details__price');
    const address = wrapper.find('.property-details__address');
    const bedrooms = wrapper.find('.property-details__bedrooms');
    const bathrooms = wrapper.find('.property-details__bathrooms');
    const carSpaces = wrapper.find('.property-details__car-spaces');

    expect(price.text()).to.equal('$3,750,000');
    expect(address.text()).to.equal('4D Duke Street, Balmain East');
    expect(bedrooms.text()).to.equal('4');
    expect(bathrooms.text()).to.equal('3');
    expect(carSpaces.text()).to.equal('2');
  });
});
