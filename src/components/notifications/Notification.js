import React from 'react';
import styles from './notifications.module.css'

const Notifications = ({massage}) => (
<p className={styles.msg}>{massage}</p>
)

export default Notifications;