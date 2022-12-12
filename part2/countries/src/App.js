import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./Components/Country/Country";
import Countries from "./Components/Countries/Countries";

function App() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const countryFiltered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(country)
  );

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const countrySearch = () => {
    const lengthCountries = countryFiltered.length;
    if (lengthCountries === 1) {
      return countryFiltered.map((c) => <Country country={c} />);
    }

    return <Countries countries={countryFiltered} />;
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="country"> search country </label>
        <input value={country} onChange={handleChange} name="country" />
      </form>
      {countrySearch()}
    </div>
  );
}

export default App;
