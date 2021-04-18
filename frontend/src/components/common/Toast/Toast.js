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
        <button type='button' onClick={() => dispatch(alertClear())}>
          X
        </button>
        <div className={styles.notificationImage}>
          <img src='' alt='' />
        </div>
        <div>
          <p className={styles.notificationTitle}>{toastAlert.type}</p>
          <p className={styles.notificationMessage}>{toastAlert.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
