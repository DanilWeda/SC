import React from 'react'
import styles from './Body.module.css'
import Post from './Posts/Post/Post'
import Posts from './Posts/Posts'
import User from './User/User'

const Body = (props) => {

  const allPosts = props.state.posts.map((post) => <Post text={post.text} like={post.likes} />);

	return (
    <div className={styles.body}>
      <div className={styles.img}></div>
      <User />
      <Posts dispatch={props.state.dispatch} />
      {allPosts}
    </div>
  );
}

export default Body
