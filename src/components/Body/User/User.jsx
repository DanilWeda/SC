import React from 'react'
import styles from './User.module.css'

const User = () => {
	return (
		<div>
			<div className={styles.body}>
				<div className={styles.img}></div>
				<div className={styles.desc}>
				<h3 className={styles.title}>Name</h3>
				<h5 className={styles.item}>Data of Birthday</h5>
				<h5 className={styles.item}>City</h5>
				<h5 className={styles.item}>Education</h5>
				<h5 className={styles.item}>Web Site</h5>
				</div>
			</div>
		</div>
	)
}

export default User
