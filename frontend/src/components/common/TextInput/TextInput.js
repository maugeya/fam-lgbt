import PropTypes from 'prop-types';

import styles from './TextInput.module.css';

const TextInput = ({ inputName, type, handleOnChangeInput, value, errors }) => {
  const getErrorsForInput = () => {
    return errors.map((error) => error[inputName]);
  };

  const renderErrors = () => {
    const errorsForInput = getErrorsForInput();

    if (!errorsForInput) {
      return null;
    }

    return errorsForInput.map((error, i) => (
      <p key={i} className={styles.errorContent}>
        {error}
      </p>
    ));
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.labelledInput}>
        <label className={styles.inputLabel}>{inputName}</label>
        <input
          className={styles.textInput}
          type={type}
          name={inputName}
          onChange={handleOnChangeInput}
          value={value}
        />
      </div>
      <div className={styles.errorContainer}>{renderErrors()}</div>
    </div>
  );
};

TextInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleOnChangeInput: PropTypes.func.isRequired,
  value: PropTypes.string,
  errors: PropTypes.array,
};

TextInput.defaultProps = {
  errors: [],
  type: 'text',
  value: '',
};

export default TextInput;
