/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from "./ViewFeedbackSuggestion.module.css";
import Navbar from '../../../navbar/Navbar';
import AdminSidebar from '../admin-sidebar/AdminSidebar';


export default function ViewFeedbackSuggestion() {
    return (
        <div className={styles.mainContainer}>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <AdminSidebar />

                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Feedback and Suggestion</h1>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Header</th>
                                            <th scope="col">Header</th>
                                            <th scope="col">Header</th>
                                            <th scope="col">Header</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1,001</td>
                                            <td>random</td>
                                            <td>data</td>
                                            <td>placeholder</td>
                                            <td>text</td>
                                        </tr>
                                        <tr>
                                            <td>1,002</td>
                                            <td>placeholder</td>
                                            <td>irrelevant</td>
                                            <td>visual</td>
                                            <td>layout</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                </div>
            </div>


        </div>
    )
}