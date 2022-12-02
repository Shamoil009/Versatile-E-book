/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../../../navbar/Navbar';
import styles from "./Favourite.module.css";
import UserSidebar from '../user-sidebar/UserSidebar';


export default function Favourite() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <UserSidebar />

                        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ paddingTop: "10px" }}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Favourite</h1>
                                
                            </div>

                            <form className="d-flex col-lg-5 col-md-4 pt-2 pb-3" role="search" >
                                <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-secondary btn-sm" type="submit">Search</button>
                            </form>

                            <h2>Section title</h2>
                            
                        </div>
                    </div>
                </div>


            </div >
        </div >
    )
}