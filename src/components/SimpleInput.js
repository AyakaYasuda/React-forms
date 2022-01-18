import { useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const inputNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.includes('@');
  const inputEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = '';

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const inputNameChangeHangler = event => {
    setEnteredName(event.target.value);
  };

  const inputEmailChangeHangler = event => {
    setEnteredEmail(event.target.value);
  };

  const inputNameBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const inputEmailBlurHandler = event => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const inputNameClasses = inputNameIsInvalid
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
          onChange={inputNameChangeHangler}
          onBlur={inputNameBlurHandler}
          value={enteredName}
        />
        {inputNameIsInvalid && (
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
