import React from 'react';
import Notification from '../notifications/Notification'
import StatisticsEntries from './StatisticsEntries'
import styles from './statistics.module.css'

let status = false
export const getStart = (flag) => {
  return status = flag; 
}


const Statistics = ({...props}) => {

  return(
    <>
      <h2 className={styles.statistics__tittle}>Statistics</h2>
      {status ? <StatisticsEntries {...props}/>: 
      <Notification massage="No feedback given"/>
      }
    </>
  )
}

export default Statistics;