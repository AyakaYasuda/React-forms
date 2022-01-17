import { useRef, useState } from 'react';

const SimpleInput = props => {
  const inputNameRef = useRef('');
  const [enteredName, setEnteredName] = useState('');

  const inputNameChangeHangler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(enteredName.trim() === '') {
      return;
    }

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
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={inputNameRef}
          type='text'
          id='name'
          onChange={inputNameChangeHangler}
          value={enteredName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
