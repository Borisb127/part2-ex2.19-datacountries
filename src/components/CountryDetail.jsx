
const CountryDetail = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>

            <h3>Languages</h3>
            <ul>
              {Object.values(country.languages)
                     .map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              width = "200"
            />
        </div>
    );
  };
  
  export default CountryDetail;
  