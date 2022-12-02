/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../navbar/Navbar';
import styles from "./Gallery.module.css";
import UserSidebar from '../dashboards/user/user-sidebar/UserSidebar';


export default function Dashboard() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <UserSidebar />

                        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ "padding-top": "10px" }}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Gallery</h1>
                            </div>
                            <div className='row'>
                                <div className={`${styles.imagePreview} col-3`}>
                                    <img src='https://png.pngtree.com/png-clipart/20201229/ourlarge/pngtree-elegant-book-black-and-white-clipart-png-image_2667208.jpg' />
                                    <div className={styles.templateName}>
                                        House of the dragons
                                    </div>
                                    <div className={styles.templateName}>
                                        $10
                                    </div>
                                    <button className='btn btn-primary btn-sm'>Buy</button>
                                </div>

                                <div className={`${styles.imagePreview} col-3`}>
                                    <img src='https://png.pngtree.com/png-clipart/20201229/ourlarge/pngtree-elegant-book-black-and-white-clipart-png-image_2667208.jpg' />
                                    <div className={styles.templateName}>
                                        Pride and Prejudice
                                    </div>
                                    <div className={styles.templateName}>
                                        $20
                                    </div>
                                    <button className='btn btn-primary btn-sm'>Buy</button>
                                </div>

                                <div className={`${styles.imagePreview} col-3`}>
                                    <img src='https://png.pngtree.com/png-clipart/20201229/ourlarge/pngtree-elegant-book-black-and-white-clipart-png-image_2667208.jpg' />
                                    <div className={styles.templateName}>
                                        In Search of Lost Time
                                    </div>
                                    <div className={styles.templateName}>
                                        $35
                                    </div>
                                    <button className='btn btn-primary btn-sm'>Buy</button>
                                </div>

                                <div className={`${styles.imagePreview} col-3`}>
                                    <img src='https://png.pngtree.com/png-clipart/20201229/ourlarge/pngtree-elegant-book-black-and-white-clipart-png-image_2667208.jpg' />
                                    <div className={styles.templateName}>
                                        One Hundred Years of Solitude
                                    </div>
                                    <div className={styles.templateName}>
                                        $25
                                    </div>
                                    <button className='btn btn-primary btn-sm'>Buy</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}