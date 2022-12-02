/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../../../navbar/Navbar';
import styles from "./Dashboard.module.css";
import AuthorSidebar from '../author-sidebar/AuthorSidebar';
export default function AuthorDashboard() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <AuthorSidebar />

                        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ "padding-top": "10px" }}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Author Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group me-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-center pt-3 d-flex justify-content-start'>
                                <div className='col-5 align-self-start shadow rounded pt-3 pb-3'>
                                    <h4>Wallet</h4>
                                    <div>
                                        <p>Total Ammount: </p><p className='fs-2 text-dark'>90.0$</p>
                                        <button type="button" className='btn btn-secondary'>Withdraw</button>
                                    </div>

                                </div>
                                    <div className='col-5 offset-1 align-self-start shadow rounded pt-3 pb-3'>
                                        <h4>Total Books</h4>
                                        <div>
                                            <p>Published books: 3</p>
                                            <p>Total books: 5</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </div >
    )
}