import { ChangeEvent, useState } from 'react';

export interface UseFieldReturn {
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const useField = (type = 'text'): UseFieldReturn => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    type,
    reset
  };
};

export default useField;