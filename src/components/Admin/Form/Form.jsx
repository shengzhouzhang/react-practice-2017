import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Form extends Component {
  constructor() {
    super();
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    address: {
      value: '',
      errorMessage: null,
    },
    price: {
      value: '',
    },
    color: {
      value: '#ffffff',
    },
  }
  onAddressChange(value) {
    if (this.validateAddress(value)) {
      this.setState({ address: { value, errorMessage: null } });
    }
  }
  onPriceChange(value) {
    this.setState({ price: { value, errorMessage: null } });
  }
  onColorChange(value) {
    this.setState({ color: { value, errorMessage: null } });
  }
  onChange({ fieldName, value }) {
    if (this.validate(fieldName, value)) {
      this.setState({ [fieldName]: { value, errorMessage: null } });
    }
  }
  onSubmit(event) {
    event.preventDefault();
    const { address, price, color } = this.state;
    if (this.validateAddress(address.value)) {
      this.props.createListing({
        address: address.value,
        price: price.value || 'price available on request',
        color: color.value,
      });
    }
  }
  validateAddress(value) {
    if (!value) {
      this.setState({ address: { value, errorMessage: 'address is required.' } });
      return false;
    }
    return true;
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          id="form-address-input"
          label="address"
          placeholder="property address"
          className="form-address"
          type="text"
          onChange={this.onAddressChange}
          {...this.state.address}
        />
        <Input
          id="form-price-input"
          label="price"
          placeholder="sale price"
          className="form-price"
          type="number"
          onChange={this.onPriceChange}
          {...this.state.price}
        />
        <Input
          id="form-color-input"
          label="color"
          className="form-color"
          type="color"
          onChange={this.onColorChange}
          {...this.state.color}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export const FormProps = PropTypes.shape({
  createListing: PropTypes.func.isRequired,
});

Form.propTypes = FormProps.isRequired;
