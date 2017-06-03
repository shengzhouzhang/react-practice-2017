import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Listing from './Listing';
import Branding from './Branding';

describe('Listing Component', () => {
  const PROPS = {
    agency: {
      agencyName: 'agency-name',
      logoUrl: 'logo-url',
      backgroundColor: 'background-color',
    },
  };

  it('should contain Branding', () => {
    const wrapper = shallow(<Listing {...PROPS} />);
    const branding = wrapper.find(Branding);

    expect(branding).to.have.length(1);
    expect(branding.prop('agencyName')).to.equal('agency-name');
    expect(branding.prop('logoUrl')).to.equal('logo-url');
    expect(branding.prop('backgroundColor')).to.equal('background-color');
  });
});
