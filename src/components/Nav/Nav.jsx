import React from 'react'
import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

const Nav = () => {
	return (
		<div className={styles.nav}>
			<ul>
				<li className={styles.item}><Link className={styles.links} to="/body">Profile</Link></li>
				<li className={styles.item}><Link className={styles.links} to="/dialogs">Messages</Link></li>
				<li className={styles.item}><Link className={styles.links} to="/news">News</Link></li>
				<li className={styles.item}><Link className={styles.links} to="/music">Music</Link></li>
				<li className={styles.item}><Link className={styles.links} to="/settings">Settings</Link></li>
			</ul>
		</div>
	)
}

export default Nav
