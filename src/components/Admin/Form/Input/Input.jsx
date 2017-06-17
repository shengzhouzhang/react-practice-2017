import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    this.props.onChange(event.target.value);
  }
  render() {
    const { id, name, type, placeholder, className, label, value, errorMessage } = this.props;
    return (
      <div className={classNames(className, { hasError: !!errorMessage })}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          className="text-input"
          type={type}
          value={value}
          onChange={this.onChange}
        />
        <span>{ errorMessage }</span>
      </div>
    );
  }

}

export const TextInputProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
});

TextInput.propTypes = TextInputProps.isRequired;
