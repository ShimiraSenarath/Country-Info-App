import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultsList from '../component/ResultList';

describe('ResultsList', () => {
  it('should render a list of results', () => {
    const results = [
      {
        name: {
          common: 'Country A',
        },
        cca3: 'A',
      },
      {
        name: {
          common: 'Country B',
        },
        cca3: 'B',
      },
    ];

    render(
      <ResultsList
        showList={true}
        results={results}
        handleSelectCountry={() => {}}
      />
    );

    const countryA = screen.getByText('Country A');
    const countryB = screen.getByText('Country B');

    expect(countryA).toBeInTheDocument();
    expect(countryB).toBeInTheDocument();
  });

  it('should call handleSelectCountry when a result is clicked', () => {
    const results = [
      {
        name: {
          common: 'Country A',
        },
        cca3: 'A',
      },
    ];
    const handleSelectCountryMock = jest.fn();

    render(
      <ResultsList
        showList={true}
        results={results}
        handleSelectCountry={handleSelectCountryMock}
      />
    );

    const countryA = screen.getByText('Country A');
    fireEvent.click(countryA);

    expect(handleSelectCountryMock).toHaveBeenCalledWith(results[0]);
  });

  it('should display "No results found" when no results are provided', () => {
    render(
      <ResultsList
        showList={true}
        results={[]}
        handleSelectCountry={() => {}}
      />
    );

    const noResults = screen.getByText('No results found');

    expect(noResults).toBeInTheDocument();
  });

  it('should not display the list when showList is false', () => {
    const results = [
      {
        name: {
          common: 'Country A',
        },
        cca3: 'A',
      },
    ];

    render(
      <ResultsList
        showList={false}
        results={results}
        handleSelectCountry={() => {}}
      />
    );

    const countryA = screen.queryByText('Country A');

    expect(countryA).toBeNull();
  });
});
