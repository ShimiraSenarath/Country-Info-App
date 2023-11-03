import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CountryInfo from '../component/CountryInfo';

// Mocking Axios requests
const mockAxios = new MockAdapter(axios);

// Sample data for testing
const mockApiResponse = [
  {
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
  },
];

// Mock Axios API response
mockAxios
  .onGet('https://restcountries.com/v3.1/name/SampleCountry')
  .reply(200, mockApiResponse);

describe('CountryInfo', () => {
  it('should render the CountryInfo component', () => {
    render(<CountryInfo />);
    const header = screen.getByText('Country Information');
    expect(header).toBeInTheDocument();
  });

  it('should display results when a search is performed', async () => {
    render(<CountryInfo />);
    const input = screen.getByPlaceholderText('Search for a country');

    // Simulate typing a search query
    fireEvent.change(input, { target: { value: 'SampleCountry' } });

    // Wait for the API request to complete
    await screen.findByText('Sample Country');

    // Check if the search result is displayed
    const searchResult = screen.getByText('Sample Country');
    expect(searchResult).toBeInTheDocument();
  });
});
