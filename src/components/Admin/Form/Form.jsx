import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export function populateRemainingFields({ address, price, color }) {
  return {
    mainPhoto: {
      url: 'https://i2.au.reastatic.net/640x480/4cd186cdfca5941d6a72e5a58b3b8bb1e490df705f38168e491524f3120b5c9f/main.jpg',
      alt: address,
    },
    branding: {
      color,
      logo: {
        url: 'https://i1.au.reastatic.net/agencylogo/DIMGNH/12/20160823153934.gif',
        alt: 'Coronis - Coorparoo',
      },
    },
    propertyDetails: {
      price,
      address,
      bedrooms: 3,
      bathrooms: 1,
      carSpaces: 2,
    },
  };
}

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
      this.props.createListing(
        populateRemainingFields({
          address: address.value,
          price: price.value || 'price available on request',
          color: color.value,
        }),
      )
      .then(() => console.log('property created')) // eslint-disable-line
      .catch(err => console.error(`failed to create property: ${err.message}`)); // eslint-disable-line
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
