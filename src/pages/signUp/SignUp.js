import React from 'react';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const SignUp = () => {
    let navigate = useNavigate();
    const [cookies, setCookies] = useCookies(['auth']);

    function signup() {
        setCookies('Auth', 'true', { path: '/' });
        navigate("/", { replace: true });
    }
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <input className={styles.text} type="text" name="email" id="myEmail" placeholder='email id' />
                <input className={styles.text} type="password" name="password" id="myPassword" placeholder='password' />
                <input className={styles.text} type="password" name="cnfpassword" id="myCnfPassword" placeholder='confirm password' />
                <button className={styles.btn} onClick={signup} >SIGN UP</button>
                <div className={styles.notRegistered}>
                    <p>Already Registered</p>
                    <Link className={styles.link} to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp