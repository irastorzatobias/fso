import React from 'react';
import { Visibility } from '../types';

interface VisibilityInputProps {
  onChange: (value: Visibility) => void;
  value: Visibility;
}

const VisibilityInput: React.FC<VisibilityInputProps> = ({ onChange, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as Visibility);
  };

  const inputs = Object.values(Visibility).map((v) => {
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
      visibility:
      {inputs}
    </div>
  );
};

export default VisibilityInput;
