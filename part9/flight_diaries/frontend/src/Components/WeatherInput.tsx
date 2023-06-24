import React from 'react';
import { Weather } from '../types';

interface WeatherInputProps {
  onChange: (value: Weather) => void;
  value: Weather;
}

const WeatherInput: React.FC<WeatherInputProps> = ({ onChange, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as Weather);
  };

  const inputs = Object.values(Weather).map((v) => {
    return (
      <div key={v}>
        <input
          value={v}
          type="radio"
          onChange={handleChange}
          checked={v === value}
        />
        <label>{v}</label>
      </div>
    );
  });

  return (
    <div style={{ display: 'flex' }}>
      Weather:
      {inputs}
    </div>
  );
};

export default WeatherInput;
