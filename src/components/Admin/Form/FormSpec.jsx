import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Form, { populateRemainingFields } from './Form';


describe('Form Component', () => {
  const PREVENT_DEFAULT_SPY = sinon.spy();
  const CREATE_LISTING_SPY = sinon.stub().returns(Promise.resolve());
  const PROPS = {
    createListing: CREATE_LISTING_SPY,
  };

  beforeEach(() => {
    CREATE_LISTING_SPY.resetHistory();
    PREVENT_DEFAULT_SPY.reset();
  });

  it('should render form with address, price, color inputs, and submit button', () => {
    const wrapper = shallow(<Form {...PROPS} />);
    const form = wrapper.find('form');
    const address = form.find('Input[id="form-address-input"]');
    const price = form.find('Input[id="form-price-input"]');
    const color = form.find('Input[id="form-color-input"]');
    const submit = form.find('button[type="submit"]');

    expect(form).to.have.length(1);

    expect(address).to.have.length(1);
    expect(address.prop('type')).to.equal('text');
    expect(address.prop('label')).to.equal('address');
    expect(address.prop('placeholder')).to.equal('property address');
    expect(address.prop('className')).to.equal('form-address');
    expect(address.prop('value')).to.equal('');

    expect(price).to.have.length(1);
    expect(price.prop('type')).to.equal('number');
    expect(price.prop('label')).to.equal('price');
    expect(price.prop('placeholder')).to.equal('sale price');
    expect(price.prop('className')).to.equal('form-price');
    expect(price.prop('value')).to.equal('');

    expect(color).to.have.length(1);
    expect(color.prop('type')).to.equal('color');
    expect(color.prop('label')).to.equal('color');
    expect(color.prop('className')).to.equal('form-color');
    expect(color.prop('value')).to.equal('#ffffff');

    expect(submit).to.have.length(1);
  });

  describe('when input value changes', () => {
    it('should be able to change address, price, and color values', () => {
      const wrapper = shallow(<Form {...PROPS} />);
      const address = wrapper.find('Input[id="form-address-input"]');
      const price = wrapper.find('Input[id="form-price-input"]');
      const color = wrapper.find('Input[id="form-color-input"]');

      expect(address.prop('value')).to.equal('');
      expect(price.prop('value')).to.equal('');
      expect(color.prop('value')).to.equal('#ffffff');

      address.simulate('change', 'test-address');
      price.simulate('change', 'test-price');
      color.simulate('change', '#000000');

      wrapper.update();

      const updatedAddress = wrapper.find('Input[id="form-address-input"]');
      const updatedPrice = wrapper.find('Input[id="form-price-input"]');
      const updatedColor = wrapper.find('Input[id="form-color-input"]');

      expect(updatedAddress.prop('value')).to.equal('test-address');
      expect(updatedPrice.prop('value')).to.equal('test-price');
      expect(updatedColor.prop('value')).to.equal('#000000');
    });

    it('should be able to validate address when value changed', () => {
      const wrapper = shallow(<Form {...PROPS} />);
      const address = wrapper.find('Input[id="form-address-input"]');

      expect(address.prop('errorMessage')).to.equal(null);

      address.simulate('change', '');
      wrapper.update();

      const updatedAddress = wrapper.find('Input[id="form-address-input"]');

      expect(updatedAddress.prop('errorMessage')).to.equal('address is required.');
    });
  });

  describe('when form submits', () => {
    it('should be able to submit updated address, price, and color values', () => {
      const wrapper = shallow(<Form {...PROPS} />);
      const form = wrapper.find('form');
      const address = wrapper.find('Input[id="form-address-input"]');
      const price = wrapper.find('Input[id="form-price-input"]');
      const color = wrapper.find('Input[id="form-color-input"]');

      address.simulate('change', 'test-address');
      price.simulate('change', 'test-price');
      color.simulate('change', '#000000');
      form.simulate('submit', { preventDefault: PREVENT_DEFAULT_SPY });

      expect(PREVENT_DEFAULT_SPY.calledOnce).to.equal(true);
      expect(CREATE_LISTING_SPY.calledOnce).to.equal(true);
      expect(CREATE_LISTING_SPY.getCall(0).args[0]).to.eql(populateRemainingFields({
        address: 'test-address',
        price: 'test-price',
        color: '#000000',
      }));
    });

    it('should be able to submit init or default price and color values', () => {
      const wrapper = shallow(<Form {...PROPS} />);
      const form = wrapper.find('form');
      const address = wrapper.find('Input[id="form-address-input"]');

      address.simulate('change', 'test-address');
      form.simulate('submit', { preventDefault: PREVENT_DEFAULT_SPY });

      expect(PREVENT_DEFAULT_SPY.calledOnce).to.equal(true);
      expect(CREATE_LISTING_SPY.calledOnce).to.equal(true);
      expect(CREATE_LISTING_SPY.getCall(0).args[0]).to.eql(populateRemainingFields({
        address: 'test-address',
        price: 'price available on request',
        color: '#ffffff',
      }));
    });

    it('should be able to validate address value when form submits', () => {
      const wrapper = shallow(<Form {...PROPS} />);
      const form = wrapper.find('form');
      const address = wrapper.find('Input[id="form-address-input"]');

      expect(address.prop('errorMessage')).to.equal(null);

      form.simulate('submit', { preventDefault: PREVENT_DEFAULT_SPY });

      expect(PREVENT_DEFAULT_SPY.calledOnce).to.equal(true);
      expect(CREATE_LISTING_SPY.called).to.equal(false);

      wrapper.update();

      const updatedAddress = wrapper.find('Input[id="form-address-input"]');

      expect(updatedAddress.prop('errorMessage')).to.equal('address is required.');
    });
  });
});
