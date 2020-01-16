import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';

const open = true;
const children = <h1>Test</h1>;
const renderComponent = (props = {}) => {
  const wrapper = mount(
    <Root status={open} {...props}>
      {children}
    </Root>,
  );

  return wrapper;
};

describe('<Root />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should adopt Wrapper status attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('status')).toEqual(open);
  });
});
