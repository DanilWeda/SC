import React from 'react'
import styles from './User.module.css'
import {Link} from 'react-router-dom'

const User = (props) => {
	return (
    <div className={styles.user}>
      <div className={styles.avatar}></div>
      <Link to={`/dialogs/${props.id}`} className={styles.link}>
        {props.name}
      </Link>
    </div>
  );
}

export default User
