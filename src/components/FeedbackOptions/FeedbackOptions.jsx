import PropTypes from 'prop-types';
import React from 'react';
import styles from './FeedbackOptions.module.css'

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return <ul className={styles.list}>
      {options.map(option => {
          return <li key={option}>
              <button type='button' className={styles.button} onClick={() => onLeaveFeedback(option)}>{option}</button>
          </li>;
      })}
    </ul>;
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array
}