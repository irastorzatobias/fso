import { useEffect, useState } from "react";
import { getCountry } from "../services/countryService";

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    console.log("useCountry effect");
    getCountry(name)
      .then((res) => {
        setCountry(res);
      })
      .catch((error) => {
        setCountry(null);
        console.error(error);
      });
  }, [name]);

  return country;
};

export default useCountry;
