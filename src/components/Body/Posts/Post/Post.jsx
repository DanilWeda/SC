import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
	return (
    <div>
      <div className={styles.item}>
        <div className={styles.avatar}></div>
        <p className={styles.text}>{props.text}</p>
        <p className={styles.like}>LIKES: {props.like}</p>
      </div>
    </div>
  );
}

export default Post
