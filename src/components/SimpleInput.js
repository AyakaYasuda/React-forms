import { useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const inputNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const inputNameChangeHangler = event => {
    setEnteredName(event.target.value);
  };

  const inputNameBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log('from State: ', enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const inputNameClasses = inputNameIsInvalid
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
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
