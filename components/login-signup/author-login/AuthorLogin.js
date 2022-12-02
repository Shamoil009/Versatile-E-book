import React from 'react';
import styles from "../css/Login.module.css";
import "../css/util.css";
//import "../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../../../assets/fonts/iconic/css/material-design-iconic-font.min.css";
import { Link } from 'react-router-dom';

export default function AuthorLogin() {
    return (
        <div className={styles.limiter}>

            <div className={styles['container-login100']}>
                <div className={`${styles['wrap-login100']} p-l-55 p-r-55 p-t-45 p-b-50`}>
                    <form className={`${styles["login100-form"]} ${styles["validate-form"]}`}>
                        <span className={`${styles["login100-form-title"]} p-b-45`}>
                            Author Login
                        </span>

                        <div className={`${styles['wrap-input100']} ${styles['validate-input']} m-b-23`} data-validate="Username is required">
                            <span className={styles["label-input100"]}>Username</span>
                            <input className={styles.input100} type="text" name="username" placeholder="Type your username" />
                            {/* user icon */}
                            <span className={styles["focus-input100"]} data-symbol="&#xf206;"></span>

                        </div>

                        <div className={`${styles['wrap-input100']} ${styles['validate-input']}`} data-validate="Password is required">
                            <span className={styles["label-input100"]}>Password</span>
                            <input className={styles.input100} type="password" name="pass" placeholder="Type your password" />
                            <span className={styles["focus-input100"]} data-symbol="&#xf190;"></span>
                        </div>

                        <div className="text-right p-t-8 p-b-31">
                            <a href="#">
                                Forgot password?
                            </a>
                        </div>


                        <div className={styles["container-login100-form-btn"]}>
                            <div className={styles["form-btn"]}>
                                <Link to='/author/dashboard'>
                                    <button className={styles['form-btn-login']}>
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>


                        <div className="flex-col-c p-t-80">
                            <div className={styles.txt1}>
                                Login as:&nbsp;
                            </div>
                            <span >
                                <Link to='/userlogin' className={styles.txt2} >
                                    User
                                </Link>
                                <Link to='/adminlogin' className={`${styles.txt2} p-l-20 p-r-20`} >
                                    Admin
                                </Link>
                                <Link to='/proofreaderlogin' className={styles.txt2} >
                                    Proofreader
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

