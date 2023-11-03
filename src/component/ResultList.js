import React from 'react';

const ResultsList = ({ showList, results, handleSelectCountry }) => {
  return (
    // Search result list
    <div className="result-wrapper">
      {showList && results.length > 0 ? (
        <ul className="list-group">
          {results.map((country) => (
            <li
              className="list-group-item"
              key={country.cca3}
              onClick={() => handleSelectCountry(country)}
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-result">No results found</p>
      )}
    </div>
  );
};

export default ResultsList;
