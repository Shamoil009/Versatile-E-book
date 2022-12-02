/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from "./PublishedBook.module.css";
import Navbar from '../../../navbar/Navbar';
import AdminSidebar from '../admin-sidebar/AdminSidebar';


export default function PublishedBook() {
    return (
        <div className={styles.mainContainer}>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <AdminSidebar />

                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Published Books</h1>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Book name</th>
                                            <th scope="col">Author</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>House of the dragons</td>
                                            <td>Ali Khan</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>5</td>
                                            <td> In Search of Lost Time </td>
                                            <td>Ahmed</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>8</td>
                                            <td> Ulysses</td>
                                            <td>Hasan</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>11</td>
                                            <td>One Hundred Years of Solitude</td>
                                            <td>Ahsan</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>12</td>
                                            <td> The Great Gatsby </td>
                                            <td>Umair</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>13</td>
                                            <td>War and Peace</td>
                                            <td>Jack</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>14</td>
                                            <td> Pride and Prejudice</td>
                                            <td>Umer</td>
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