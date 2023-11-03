import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInput from '../component/SearchInput';

describe('SearchInput', () => {
  it('should render the input element with the correct value', () => {
    const value = 'Search Text';

    render(<SearchInput value={value} onChange={() => {}} />);

    const inputElement = screen.getByPlaceholderText('Search for a country');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value);
  });

  it('should call the onChange function when the input value changes', () => {
    const onChangeMock = jest.fn();

    render(<SearchInput value="" onChange={onChangeMock} />);

    const inputElement = screen.getByPlaceholderText('Search for a country');

    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(onChangeMock).toHaveBeenCalledWith('New Value');
  });

  it('should have the correct label text', () => {
    const labelText = 'Enter the country name';

    render(<SearchInput value="" onChange={() => {}} />);

    const labelElement = screen.getByText(labelText);

    expect(labelElement).toBeInTheDocument();
  });
});
