import { useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { alertClear } from '../../../redux/Alert/alert.actions';
import styles from './Toast.module.css';

const Toast = () => {
  const dispatch = useDispatch();
  const toastAlert = useSelector((state) => state.alertMessages);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!_.isEmpty(toastAlert)) {
        dispatch(alertClear());
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [toastAlert, dispatch]);

  return (
    <div
      className={styles.notificationContainer}
      style={{
        backgroundColor: toastAlert.backgroundColor,
        border: toastAlert.border,
      }}
    >
      <div className={`${styles.notification}, ${styles.toast}`}>
        <div className={styles.toastHeader}>
          <button
            className={styles.closeToastButton}
            type='button'
            onClick={() => dispatch(alertClear())}
          >
            ✖️
          </button>
        </div>
        <div className={styles.toastContent}>
          <p className={styles.notificationMessage}>{toastAlert.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
