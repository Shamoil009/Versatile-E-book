import React from 'react';
import styles from "../css/Login.module.css";
import "../css/util.css";
import "../../../assets/fonts/iconic/css/material-design-iconic-font.min.css";
import { Link } from 'react-router-dom';

export default function UserSignup() {
    return (
        <div className={styles.limiter}>

            <div className={styles["container-login100"]}>
                <div className={`${styles['wrap-login100']} p-l-55 p-r-55 p-t-40 p-b-30`} >
                    <form className={`${styles["login100-form"]} ${styles["validate-form"]}`} >
                        <span className={`${styles["login100-form-title"]} p-b-40`} >
                            Sign up
                        </span>

                        <div className={`${styles['wrap-input100']} ${styles['validate-input']} m-b-20`} data-validate="Username is required">
                            <span className={styles['label-input100']}>Username</span>
                            <input className={styles.input100} type="text" name="username" placeholder="Type your username" />
                            {/* user icon */}
                            <span className={styles["focus-input100"]} data-symbol="&#xf206;"></span>
                        </div>

                        <div className={`${styles["wrap-input100"]} ${styles["validate-input"]} m-b-20`} data-validate="Password is required">
                            <span className={styles["label-input100"]}>Password</span>
                            <input className={styles.input100} type="password" name="pass" placeholder="Type your password" />
                            <span className={styles["focus-input100"]} data-symbol="&#xf190;"></span>
                        </div>

                        <div className={`${styles["wrap-input100"]} ${styles["validate-input"]} m-b-40`} data-validate="Password is required">
                            <span className={styles["label-input100"]}>Confirm Password</span>
                            <input className={styles.input100} type="password" name="pass" placeholder="Confirm password" />
                            <span className={styles["focus-input100"]} data-symbol="&#xf190;"></span>
                        </div>

                        <div className={styles["container-login100-form-btn"]}>
                            <div className={styles["form-btn"]}>
                                <button className={styles['form-btn-login']}>
                                    Signup
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex-col-c p-t-60">
                            <span className={styles.txt1}>
                                Already a user?&nbsp;
                                <Link to='/userlogin' className={styles.txt2} >
                                    Login
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

