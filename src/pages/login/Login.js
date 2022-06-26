import React, { useEffect } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Login = () => {
    let navigate = useNavigate();
    const [cookies, setCookies] = useCookies(['auth']);

    function login() {
        setCookies('Auth', 'true', { path: '/' });
        navigate("/", { replace: true });
    }

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <input className={styles.text} type="text" name="email" id="myEmail" placeholder='email id' />
                <input className={styles.text} type="password" name="password" id="myPassword" placeholder='password' />
                <button onClick={login} className={styles.btn} >LOGIN</button>
                <div className={styles.notRegistered}>
                    <p>Not registered</p>
                    <Link className={styles.link} to="/signup">Create an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login