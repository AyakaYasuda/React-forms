import { useRef, useState } from 'react';

const SimpleInput = props => {
  const inputNameRef = useRef('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const inputNameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const inputNameClasses = inputNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';
    
  const inputNameChangeHangler = event => {
    setEnteredName(event.target.value);
  };

  const inputNameBlurHandler = event => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    // in case of using State
    console.log('from State: ', enteredName);
    setEnteredName('');

    // in case of using Ref
    const enteredValue = inputNameRef.current.value;
    console.log('from Ref: ', enteredValue);
    // inputNameRef.current.value = ''; => NOT IDEAL to manipulate DOM through React
  };


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={inputNameRef}
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
