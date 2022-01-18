import { useState } from 'react';

const useInputForm = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueIsTouched, setValueIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && valueIsTouched;

  const changeValueHandler = event => {
    setEnteredValue(event.target.value);
  };

  const blurValueHandler = event => {
    setValueIsTouched(true);
  };

  const resetValue = () => {
    setEnteredValue('');
    setValueIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    changeValueHandler,
    blurValueHandler,
    resetValue,
  };
};

export default useInputForm;
