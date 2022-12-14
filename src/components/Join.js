import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { dbService } from '../fbase';
import {doc, setDoc} from "firebase/firestore";
import styles from '../routes/css/Auth.module.css';

const Join = ({ toggleToSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'userName') {
      setUserName(value);
    } else if (name === 'userNickname') {
      setUserNickname(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      const auth = getAuth();
      //create account
      data = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: userNickname,
      });

      navigate('/selectGenre', );
    } catch (e) {
      if (e.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('이미 계정이 존재합니다');
      } else {
        setError(e.message);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>회원가입</h1>
      <form onSubmit={onSubmit} className={styles.inputForm}>
        <div>
          <div className={styles.inputs}>
            <input
              name="email"
              onChange={onChange}
              type="email"
              placeholder="Email"
              required
              value={email}
              className={styles.input}
            />
            <input
              name="password"
              onChange={onChange}
              type="password"
              placeholder="Password"
              required
              value={password}
              className={styles.input}
            />
            <input
              name="userName"
              onChange={onChange}
              type="text"
              placeholder="이름"
              required
              value={userName}
              className={styles.input}
            />
            <input
              name="userNickname"
              onChange={onChange}
              type="text"
              placeholder="닉네임"
              required
              value={userNickname}
              className={styles.input}
            />
            <input
              type="submit"
              value={'장르 선택하기'}
              className={`${styles.btn} ${styles.genre_btn}`}
              onClick={onSubmit}
            ></input>
          </div>
        </div>
      </form>
      <button
        onClick={toggleToSignIn}
        className={`${styles.btn} ${styles.join}`}
      >
        로그인
      </button>
    </div>
  );
};

export default Join;
