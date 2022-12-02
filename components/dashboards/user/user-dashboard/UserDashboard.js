/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../../../navbar/Navbar';
import styles from "./Dashboard.module.css";
import UserSidebar from '../user-sidebar/UserSidebar';


export default function Dashboard() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <UserSidebar />

                        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">User Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group me-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                </div>
                            </div>

                            <form className="d-flex col-lg-5 col-md-4 pt-2 pb-3" role="search" >
                                <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-secondary btn-sm" type="submit">Search</button>
                            </form>

                            <div className='row'>
                                {/* <div className='col-3'>
                                    <img src='https://i.imgur.com/EHyR2nP.png' />
                                </div>

                                <div className='col-3'>
                                    <img src='https://timvandevall.com/wp-content/uploads/2014/01/Book-Cover-Template.jpg' />
                                </div>
                                <div className='col-3'>
                                    <img src={require('../../book cover template vector.png')} />
                                </div> */}
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
                                        Ulysses
                                    </div>
                                    <div className={styles.templateName}>
                                        $20
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

                                <div className={`${styles.imagePreview} col-3`}>
                                    <img src='https://png.pngtree.com/png-clipart/20201229/ourlarge/pngtree-elegant-book-black-and-white-clipart-png-image_2667208.jpg' />
                                    <div className={styles.templateName}>
                                        The Great Gatsby
                                    </div>
                                    <div className={styles.templateName}>
                                        $15
                                    </div>
                                    <button className='btn btn-primary btn-sm'>Buy</button>
                                </div>
                                <div className={`${styles.imagePreview} col-3`}>
                                    <img src='https://png.pngtree.com/png-clipart/20201229/ourlarge/pngtree-elegant-book-black-and-white-clipart-png-image_2667208.jpg' />
                                    <div className={styles.templateName}>
                                        War and Peace
                                    </div>
                                    <div className={styles.templateName}>
                                        $20
                                    </div>
                                    <button className='btn btn-primary btn-sm'>Buy</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </div >
    )
}