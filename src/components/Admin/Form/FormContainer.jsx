import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Form from './Form';

export default class FormContainer extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    address: '',
    price: '',
    color: '',
  }
  onChange({ fieldName, value }) {
    console.log('onChange!!!');
    this.setState({ [fieldName]: value });
  }
  onSubmit() {
    console.log('onSubmit!!!');
  }
  render() {
    const { address, price, color } = this.state;
    return (
      <Form
        address={address}
        price={price}
        color={color}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}
