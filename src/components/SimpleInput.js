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

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: inputEmailHasError,
    valueChangeHangler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetInputEmail,
  } = useInput(value => value.includes('@'));

  let formIsValid = '';

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetInputName();
    resetInputEmail();
  };

  const inputNameClasses = inputNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const inputEmailClasses = inputEmailHasError
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
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {inputEmailHasError && (
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
