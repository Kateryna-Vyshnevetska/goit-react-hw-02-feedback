import React from 'react';
import styles from './statistics.module.css'

const StatisticsEntries = ({good,neutral,bad,total,positivePercentage}) => (
  <>
    <p className={styles.text}>Good: {good}</p>
    <p className={styles.text}>Neutral: {neutral}</p>
    <p className={styles.text}>Bad: {bad}</p>
    <p className={styles.text}>Total: {total}</p>
    <p className={styles.text}>Positive feedback: {positivePercentage}</p>
  </>
)
export default StatisticsEntries;