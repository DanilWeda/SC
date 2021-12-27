import React, {useRef} from 'react'
import styles from './Massages.module.css'
import Button from '../../Body/Posts/Button/Button';

const Massage = (props) => {



	return (
    <div className={styles.block}>
      <p className={styles.text}>{props.text}</p>
      
    </div>
  );
}

export default Massage
