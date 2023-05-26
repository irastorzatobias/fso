import { useState } from "react";

const useField = (type = '') => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
    };

  return {
    type,
    value,
    onChange,
    reset
  };
};

export default useField;
