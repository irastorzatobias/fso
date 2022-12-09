import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    console.log(countries[100].name);
    setCountry(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="country"> search country </label>
        <input value={country} onChange={handleChange} name="country" />
      </form>
    </div>
  );
}

export default App;
