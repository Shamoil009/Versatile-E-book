import React from 'react'
import Navbar from '../../../navbar/Navbar';
import styles from "./author-published-book.module.css";
import AuthorSidebar from '../author-sidebar/AuthorSidebar';
export default function AuthorPublishedBook() {
    return (

        <div className={styles.mainContainer}>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <AuthorSidebar />

                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>

                        <h3>Published Books</h3>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>11</td>
                                            <td>House of the dragons</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>13</td>
                                            <td> Pride and Prejudice</td>
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
