import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <ul className={styles.list}>
      <li>
          <p>Good: { good }</p>
      </li>
      <li>
          <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {positivePercentage}%</p>     
      </li>
    </ul>;
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}