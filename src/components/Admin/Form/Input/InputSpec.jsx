import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Input from './Input';

describe('Input Component', () => {
  const ON_CHANGE_SPY = sinon.spy();
  const PROPS = {
    id: 'test-id',
    type: 'text',
    placeholder: 'test-placeholder',
    className: 'test-className',
    label: 'test-label',
    value: 'test-value',
    onChange: ON_CHANGE_SPY,
    errorMessage: null,
  };

  it('should render label and input', () => {
    const wrapper = shallow(<Input {...PROPS} />);
    const label = wrapper.find('label');
    const input = wrapper.find('input');

    expect(wrapper.prop('className')).to.equal('test-className');

    expect(label).to.have.length(1);
    expect(label.text()).to.equal('test-label');
    expect(input).to.have.length(1);
    expect(input.prop('id')).to.equal('test-id');
    expect(input.prop('type')).to.equal('text');
    expect(input.prop('placeholder')).to.equal('test-placeholder');
    expect(input.prop('value')).to.equal('test-value');
  });

  it('should render error message with hasError className', () => {
    const PROPS_WITH_ERROR = {
      ...PROPS,
      errorMessage: 'test-error',
    };
    const wrapper = shallow(<Input {...PROPS_WITH_ERROR} />);
    const error = wrapper.find('span');

    expect(wrapper.prop('className')).to.equal('test-className hasError');

    expect(error).to.have.length(1);
    expect(error.text()).to.equal('test-error');
  });

  it('should prevent event default action and call onChange method', () => {
    const PREVENT_DEFAULT_SPY = sinon.spy();
    const wrapper = shallow(<Input {...PROPS} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'test-value' }, preventDefault: PREVENT_DEFAULT_SPY });

    expect(ON_CHANGE_SPY.calledOnce).to.equal(true);
    expect(ON_CHANGE_SPY.getCall(0).args[0]).to.equal('test-value');
    expect(PREVENT_DEFAULT_SPY.calledOnce).to.equal(true);
  });
});
