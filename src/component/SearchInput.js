import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    // Input Field
    <div className="input-wrapper">
      <form>
        <div className="form-group">
          <label htmlFor="EnterTheCountryName">Enter the country name</label>
          <input
            type="text"
            placeholder="Search for a country"
            value={value}
            onChange={onChange}
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
