import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainPhoto from './MainPhoto';

describe('MainPhoto Component', () => {
  const PROPS = {
    url: 'https://i2.au.reastatic.net/800x600/863b424cbb26aa43a5d4aed53800822939340dabf5f54f12b3f8f44f9e8a1731/main.jpg',
    alt: '4D Duke Street, Balmain East, NSW 2041',
  };

  it('should render photo image', () => {
    const wrapper = shallow(<MainPhoto {...PROPS} />);
    const photo = wrapper.find('.main-photo__image');

    expect(photo.prop('src')).to.equal('https://i2.au.reastatic.net/800x600/863b424cbb26aa43a5d4aed53800822939340dabf5f54f12b3f8f44f9e8a1731/main.jpg');
    expect(photo.prop('alt')).to.equal('4D Duke Street, Balmain East, NSW 2041');
  });
});
