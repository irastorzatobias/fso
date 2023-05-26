import axios from "axios";

const getCountry = async (country) => {
  try {
    const res = await axios.get(
      `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
    );
    return res;
  } catch {
    return null;
  }
};

export { getCountry };
