import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor() {
    super();
    this.onAddressChange = this.createHandler('address');
    this.onPriceChange = this.createHandler('price');
    this.onColorChange = this.createHandler('color');
  }
  createHandler(fieldName) {
    return event => this.props.onChange({ fieldName, value: event.target.value });
  }
  render() {
    const { address, price, color, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input className="form__address" value={address} onChange={this.onAddressChange} />
        <input className="form__price" value={price} onChange={this.onPriceChange} />
        <input className="form__branding-color" value={color} onChange={this.onColorChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export const FormProps = PropTypes.shape({
  address: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
});

Form.propTypes = FormProps.isRequired;
