import React,{ useRef } from 'react'
import Button from './Button/Button'
import styles from './Posts.module.css'


const Posts = (props) => {
	
	let NewPostElement = useRef();
	let addPost = () => {
		let text = NewPostElement.current.value;
		props.dispatch({type: 'ADD-POST', postValue: text, likes: 2,});
		NewPostElement.current.value = ''
	};  

	return (
		<div>
			<div className={styles.postarea}>
				<h1 className={styles.title}>My Posts</h1>
				<textarea ref={NewPostElement} className={styles.desc} name="desc" cols="30" rows="10" placeholder='Your news...'></textarea>
				<Button click={addPost} position={styles.btn}/>
			</div>
		</div>
	)
}

export default Posts
