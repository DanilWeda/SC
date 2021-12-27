import React, { useRef } from 'react';
import Button from '../Body/Posts/Button/Button';
import styles from './Dialogs.module.css';
import Massage from './Massages/Massage';
import User from './Massages/User';


const Dialogs = (props) => {
  const allUsers = props.state.dataUsers.map((obj) => (
    <User name={obj.name} id={obj.id} />
  ));

  let newPostElement = useRef();

  let addNewMessage = () => {
    let text = newPostElement.current.value;
    props.state.dispatch({ type: 'SEND-MESSAGE', id: 5, text: text, });
    newPostElement.current.value = '';
  };

 

  const allMassage = props.state.dataMessages.map((obj) => (
    <Massage text={obj.text} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.userWrapper}>{allUsers}</div>
      <div className={styles.massagesWrapper}>
        {allMassage}
        <textarea
          ref={newPostElement}
          className={styles.desc}
          name='desc'
          cols='30'
          rows='10'
          placeholder='Send message'
        ></textarea>
        <Button click={addNewMessage} position={styles.btn} />
      </div>
    </div>
  );
};

export default Dialogs;
