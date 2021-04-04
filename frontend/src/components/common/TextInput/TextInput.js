import styles from './TextInput.module.css';

const TextInput = ({ inputName, type, handleOnChangeInput, value, errors }) => {
  const getErrorsForInput = () => {
    return errors.map((error) => error[inputName]);
  };

  const renderErrors = () => {
    const errorsForInput = getErrorsForInput();

    return errorsForInput.map((error, i) => (
      <p key={i} className={styles.errorContent}>
        {error}
      </p>
    ));
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>
        {inputName}
        <input
          className={styles.textInput}
          type={type}
          name={inputName}
          onChange={handleOnChangeInput}
          value={value}
        />
      </label>
      <div className={styles.errorContainer}>{renderErrors()}</div>
    </div>
  );
};

export default TextInput;
