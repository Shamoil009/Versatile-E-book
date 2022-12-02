import React from 'react'
import styles from "./FeedbackSuggestionComplaint.module.css";

export default function FeedbackSuggestion() {
    return (

        <div className={styles.content}>
            <div className="container">
                <div className="row align-items-stretch justify-content-center no-gutters">
                    <div className="col-md-7">
                        <div className={`${styles["contact-wrap"]} ${styles.form} form h-100 p-5`}>
                            <h3 className={`${styles.feedbackHeader} text-center`}>Share your opinion</h3>
                            <form className="mb-5" method="post" id="contactForm" name="contactForm">
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <label for="" className={styles["col-form-label"]}>Name*</label>
                                        <input type="text" className={`${styles["form-control"]} form-control`} name="name" id="name" placeholder="Your name" required/>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label for="" className={styles["col-form-label"]}>Email*</label>
                                        <input type="email" className={`${styles["form-control"]} form-control`} name="email" id="email" placeholder="Your email" required/>
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <div className="form-floating">
                                        <select className={`${styles.feedbackDropdown} form-select`} id="floatingSelectGrid">
                                            <option value="feedback" selected>Feedback</option>
                                            <option value="suggestion">Suggestion</option>
                                        </select>
                                        <label for="floatingSelectGrid">Subject</label>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="message" className={styles["col-form-label"]}>Message*</label>
                                        <textarea className={`${styles["form-control"]} form-control`} name="message" id="message" cols="30" rows="4" placeholder="Write your message" required></textarea>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-5 form-group text-center">
                                        <input type="submit" value="Submit" className={`${styles.btn} ${styles["btn-primary"]} btn btn-block btn-primary rounded-10 py-2 px-4`} />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
