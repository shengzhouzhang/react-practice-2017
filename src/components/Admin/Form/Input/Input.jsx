import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    this.props.onChange(event.target.value);
  }
  render() {
    const { id, type, placeholder, className, label, value, errorMessage } = this.props;
    return (
      <div className={classNames(className, { hasError: !!errorMessage })}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
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

export const InputProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'color']).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
});

Input.propTypes = InputProps.isRequired;
