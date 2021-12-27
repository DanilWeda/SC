import React from 'react'
import styles from './Button.module.css'
import stylePosition from '../Posts.module.css'

const Button = (props) => {
	console.log(props);
	return (
    <div>
      <button onClick={props.click} className={`${styles.btn} ${props.position}`}>
        Send
      </button>
    </div>
  );
}

export default Button
