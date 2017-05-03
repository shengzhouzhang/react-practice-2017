import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AgencyBranding from './AgencyBranding';

describe('AgencyBranding', () => {
  const PROPS = {
    agencyName: 'agency-name',
    logoUrl: 'logo-url',
    backgroundColor: 'background-color',
  };

  it('should contain agency logo image', () => {
    const wrapper = shallow(<AgencyBranding {...PROPS} />);
    const logoImg = wrapper.find('img');
    expect(logoImg).to.have.length(1);
    expect(logoImg.props()).to.eql({ src: 'logo-url', alt: 'agency-name' });
  });

  it('should style background color', () => {
    const wrapper = shallow(<AgencyBranding {...PROPS} />);
    expect(wrapper.props().styles.backgroundColor).to.equal('background-color');
  });
});
