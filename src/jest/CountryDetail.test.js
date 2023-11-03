import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended matchers
import CountryDetail from '../component/CountryDetail';

// Sample data for testing
const selectedCountry = {
  name: {
    common: 'Sample Country',
    official: 'Official Name of Sample Country',
  },
  currencies: {
    USD: {
      name: 'United States Dollar',
      symbol: '$',
    },
  },
  flags: {
    png: 'sample.png',
  },
  coatOfArms: {
    png: 'coatofarms.png',
  },
  car: {
    side: 'left',
  },
};

// Test case
test('CountryDetail renders correctly with data', () => {
  render(<CountryDetail selectedCountry={selectedCountry} />);

  // Assertions
  expect(screen.getByText('Sample Country')).toBeInTheDocument();
  expect(
    screen.getByText('Official Name of Sample Country')
  ).toBeInTheDocument();
  expect(screen.getByText('Currency')).toBeInTheDocument();
  expect(screen.getByText('United States Dollar ($,  )')).toBeInTheDocument();
  expect(screen.getByText('Flag')).toBeInTheDocument();
  expect(screen.getByAltText('Flag')).toHaveAttribute('src', 'sample.png');
  expect(screen.getByAltText('Coat of Arms')).toHaveAttribute(
    'src',
    'coatofarms.png'
  );
  expect(screen.getByText('Driving Side')).toBeInTheDocument();
  expect(screen.getByText('left')).toBeInTheDocument();
});

// Test case
test('CountryDetail does not render without data', () => {
  render(<CountryDetail selectedCountry={null} />);

  // Assertions
  expect(screen.queryByText('Sample Country')).toBeNull();
  expect(screen.queryByText('Official Name of Sample Country')).toBeNull();
  expect(screen.queryByText('Currency')).toBeNull();
  expect(screen.queryByText('United States Dollar ($,  )')).toBeNull();
  expect(screen.queryByText('Flag')).toBeNull();
  expect(screen.queryByAltText('Flag')).toBeNull();
  expect(screen.queryByAltText('Coat of Arms')).toBeNull();
  expect(screen.queryByText('Driving Side')).toBeNull();
  expect(screen.queryByText('left')).toBeNull();
});
