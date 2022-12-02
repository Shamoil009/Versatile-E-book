/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../../../navbar/Navbar';
import styles from "./AddProofreader.module.css";
import AdminSidebar from '../admin-sidebar/AdminSidebar';


export default function AddProofreader() {
    return (
        <div className={styles.mainContainer}>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <AdminSidebar />

                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>
                        <div>
                            <div className="container">
                                <div className="row align-items-stretch justify-content-center no-gutters">
                                    <div className="col-7">
                                        <div className={`form h-100 p-5`}>
                                            <h3 className={`text-center`}>Add Proofreader</h3>
                                            <form className="mb-5" method="post" id="addProofreader" name="addProofreader">
                                                <div className="row">
                                                    <div className="form-group mb-3">
                                                        <label>Username*</label>
                                                        <input type="text" className={`form-control`} name="username" id="username" placeholder="Your name" required />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="form-group mb-3">
                                                        <label>Email*</label>
                                                        <input type="email" className={`form-control`} name="email" id="email" placeholder="Your email" required />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="form-group mb-3">
                                                        <label>Password*</label>
                                                        <input type="email" className={`form-control`} name="password" id="password" placeholder="Your password" required />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="form-group mb-3">
                                                        <label>Confirm Password*</label>
                                                        <input type="email" className={`form-control`} name="confirmPassword" id="confirmPassword" placeholder="Confirm password" required />
                                                    </div>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <div className="col-md-5 form-group text-center">
                                                        <input type="submit" value="Add" className={`btn btn-block btn-primary rounded-10 py-2 px-4`} />
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
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