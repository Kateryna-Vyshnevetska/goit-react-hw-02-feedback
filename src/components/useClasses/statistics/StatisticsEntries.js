import React from 'react';

const StatisticsEntries = ({good,neutral,bad,total,positivePercentage}) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </>
)
export default StatisticsEntries;