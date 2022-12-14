import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ name }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${name}`
      )
      .then((response) => setData(response.data))
      .catch((e) => console.log(e));
  }, [name]);

  if (Object.keys(data).length > 0) {
    return (
      <div>
        <h2>Weather in {name}</h2>
        <p>
          <b>temperature: {data.current.temperature} </b>
        </p>
        <img alt="temp_img" src={data['current']['weather_icons']}></img>
        <p>
          <b>wind: </b>{data['current']['wind_speed']}
        </p>
      </div>
    );
  }

  return 'No data yet'
};

export default Weather;
