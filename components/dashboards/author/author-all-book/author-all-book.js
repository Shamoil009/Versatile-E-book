import React from 'react'
import Navbar from '../../../navbar/Navbar';
import styles from "./author-all-book.module.css";
import AuthorSidebar from '../author-sidebar/AuthorSidebar';
import { Description, Report } from '@mui/icons-material';
export default function AuthorAllBook() {
    return (

        <div className={styles.mainContainer}>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <AuthorSidebar />

                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>

                        <h3>Books</h3>
                        <div className="table-responsive">
                            <table className="table table-sm table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Description className={styles.documentIcon} /></td>
                                        <td>2</td>
                                        <td>Book 1</td>
                                    </tr>
                                    <tr>
                                        <td><Description className={styles.documentIcon} /></td>
                                        <td>3</td>
                                        <td>Book 2</td>
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
