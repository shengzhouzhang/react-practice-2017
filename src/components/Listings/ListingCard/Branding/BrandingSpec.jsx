import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Branding from './Branding';

describe('Branding Component', () => {
  const PROPS = {
    logo: {
      url: 'logo-url',
      alt: 'agency-name',
    },
    color: 'background-color',
  };

  it('should style background color', () => {
    const wrapper = shallow(<Branding {...PROPS} />);
    const branding = wrapper.find('.branding');
    expect(branding.prop('style').backgroundColor).to.equal('background-color');
  });

  it('should contain agency logo image', () => {
    const wrapper = shallow(<Branding {...PROPS} />);
    const logo = wrapper.find('.branding__logo');
    expect(logo).to.have.length(1);
    expect(logo.prop('src')).to.eql('logo-url');
    expect(logo.prop('alt')).to.eql('agency-name');
  });
});
