import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [cookies, setCookies] = useCookies(['auth']);
    const navigate = useNavigate();

    function logout() {
        setCookies('Auth', 'null', { path: '/' })
        navigate("/login", { replace: true })
    }
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <button className={styles.btn} onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navigation