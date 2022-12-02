/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../../../navbar/Navbar';
import styles from "./Dashboard.module.css";
import AdminSidebar from '../admin-sidebar/AdminSidebar';
export default function AdminDashboard() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <AdminSidebar />

                        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Admin Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group me-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-7 shadow rounded pt-3'>
                                    <h4 className='align-items-center'>Total Users</h4>
                                    <div>
                                        <p>Total Authors: 7</p>
                                        <p>Total Readers: 2</p>
                                        <p>Total Proofreaders: 1</p>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}