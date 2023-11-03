import React from 'react';
import Table from 'react-bootstrap/Table';

const CountryDetail = ({ selectedCountry }) => {
  return (
    <div className="detail-wrapper">
      {selectedCountry && (
        <>
          {/* selected country name */}
          <h2>{selectedCountry.name.common}</h2>

          {/* selected country detail */}
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <td className="name-col">Official Name</td>
                <td className="detail">{selectedCountry.name.official}</td>
              </tr>
              {selectedCountry.currencies && (
                <tr>
                  <td className="name-col">Currency</td>
                  <td className="detail">
                    {Object.values(selectedCountry.currencies)
                      .map(
                        (currency) => ` ${currency.name} (${currency.symbol})`
                      )
                      .join(', ')}
                  </td>
                </tr>
              )}

              <tr>
                <td className="name-col">Flag</td>
                <td className="flag-wrap">
                  {selectedCountry.flags && (
                    <img
                      className="flag"
                      src={selectedCountry.flags.png}
                      alt="Flag"
                    />
                  )}
                  {selectedCountry.coatOfArms && (
                    <img
                      className="coatOfArms"
                      src={selectedCountry.coatOfArms.png}
                      alt="Coat of Arms"
                    />
                  )}
                </td>
              </tr>

              <tr>
                <td className="name-col">Driving Side</td>
                <td className="detail">{selectedCountry.car.side}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default CountryDetail;
