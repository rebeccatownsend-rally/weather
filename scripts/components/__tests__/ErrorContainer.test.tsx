import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ErrorContainer from '../ErrorContainer';

describe('ErrorContainer', () => {
  it('should execute handlePress when button is pressed', () => {
    const props = {
      handlePress: jest.fn(),
    };
    const {getByTestId} = render(<ErrorContainer {...props} />);
    fireEvent.press(getByTestId('error-container-retry-btn'));
    expect(props.handlePress).toHaveBeenCalled();
  });
});
