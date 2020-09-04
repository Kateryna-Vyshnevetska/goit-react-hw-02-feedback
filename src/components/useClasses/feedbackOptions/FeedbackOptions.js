import React from 'react';
import {getStart} from '../statistics/Statistics';


const FeedbackOptions = ({options, onLeaveFeedback}) => {

  const checkBtn = (ev) => {
    getStart(true);
    onLeaveFeedback(ev.target.name);
  }

  return(
    <>
      {
        Object.keys(options).map(el => (
        <button onClick={checkBtn} key={el} name={el}>{el}</button>
        ))
      }
    </>
  )
}

export default FeedbackOptions;