import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: inputNameHasError,
    valueChangeHangler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetInputName,
  } = useInput(value => value.trim() !== '');

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.includes('@');
  const inputEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = '';

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const inputEmailChangeHangler = event => {
    setEnteredEmail(event.target.value);
  };

  const inputEmailBlurHandler = event => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetInputName();

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const inputNameClasses = inputNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const inputEmailClasses = inputEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {inputNameHasError && (
          <p className='error-text'>Name should not be empty.</p>
        )}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={inputEmailChangeHangler}
          onBlur={inputEmailBlurHandler}
          value={enteredEmail}
        />
        {inputEmailIsInvalid && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
