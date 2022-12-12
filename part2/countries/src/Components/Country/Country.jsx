const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h1>languages</h1>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img style={{ maxWidth: "200px" }} src={country.flags.svg} alt="flag" />
    </div>
  );
};

export default Country;
