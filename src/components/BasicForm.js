import useInputForm from '../hooks/use-input-form';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = props => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    changeValueHandler: changeFirstNameHandler,
    blurValueHandler: blurFirstNameHandler,
    resetValue: resetFirstName,
  } = useInputForm(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    changeValueHandler: changeLastNameHandler,
    blurValueHandler: blurLastNameHandler,
    resetValue: resetLastName,
  } = useInputForm(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeValueHandler: changeEmailHandler,
    blurValueHandler: blurEmailHandler,
    resetValue: resetEmail,
  } = useInputForm(isEmail);

  let formIsValid = '';
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const inputFirstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const inputLastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const inputEmailClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={inputFirstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={changeFirstNameHandler}
            onBlur={blurFirstNameHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className='error-text'>First name should not be empty.</p>
          )}
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={changeLastNameHandler}
            onBlur={blurLastNameHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className='error-text'>Last name should not be empty.</p>
          )}
        </div>
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={changeEmailHandler}
          onBlur={blurEmailHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
