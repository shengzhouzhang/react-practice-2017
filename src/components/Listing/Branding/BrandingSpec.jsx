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

  it('should contain agency logo image', () => {
    const wrapper = shallow(<Branding {...PROPS} />);
    const logoImg = wrapper.find('img');
    expect(logoImg).to.have.length(1);
    expect(logoImg.props()).to.eql({ src: 'logo-url', alt: 'agency-name' });
  });

  it('should style background color', () => {
    const wrapper = shallow(<Branding {...PROPS} />);
    expect(wrapper.props().styles.backgroundColor).to.equal('background-color');
  });
});
