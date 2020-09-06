import React from 'react';
import {getStart} from '../statistics/Statistics';
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {

  const checkBtn = (ev) => {
    getStart(true);
    onLeaveFeedback(ev.target.name);
  }

  return(
    <>
    <div className={styles.sect__btn}>
      {
        Object.keys(options).map(el => (
        <button onClick={checkBtn} key={el} name={el} className={styles.btn}>{el}</button>
        ))
      }
      </div>
    </>
  )
}

export default FeedbackOptions;