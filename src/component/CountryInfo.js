// src/components/CountryInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import SearchInput from './SearchInput';
import ResultsList from './ResultList';
import CountryDetail from './CountryDetail';

const CountryInfo = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showList, setShowList] = useState(true);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setSearch(country.name.common);
    setShowList(false);
  };

  //   Fetching data
  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((response) => {
          setResults(response.data);
          console.log(response.data, 'hi222');
        })
        .catch((error) => {
          console.error('API request error:', error);
          setResults([]);
        });
      setShowList(true);
    } else {
      setResults([]);
    }
  }, [search]);

  console.log(selectedCountry, 'hi');

  return (
    <div className="content">
      <h1>Country Information</h1>

      {/* Input Field */}
      <div className="input-wrapper">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Search result list */}
      <ResultsList
        showList={showList}
        results={results}
        handleSelectCountry={handleSelectCountry}
      />

      {/* Detail contner */}
      <CountryDetail selectedCountry={selectedCountry} />
    </div>
  );
};

export default CountryInfo;
