import PropTypes from 'prop-types';
import React from 'react';
import styles from './FeedbackOptions.module.css'

export const FeedbackOptions = ({onPositive, onNeutral, onNegative}) => {
    return <ul className={styles.list}>
      <li>
          <button type='button' className={styles.button} onClick={onPositive}>Good</button>
      </li>
      <li>
          <button type='button' className={styles.button} onClick={onNeutral}>Neutral</button>
      </li>
      <li>
          <button type='button' className={styles.button} onClick={onNegative}>Bad</button>
      </li>
    </ul>;
}

FeedbackOptions.propTypes = {
    onPositive: PropTypes.func,
    onNeutral: PropTypes.func,
    onNegative: PropTypes.func,
}