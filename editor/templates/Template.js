/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styles from "./Template.module.css";

import Chatbot from "../../chatbot/Chatbot";
import * as templatelist from "./templatelist.js";
import Images from "./Images";

function insertPreview(props) {
    return (
        <Images
            name={props.name}
            filename={props.filename}
            type={props.type}

        />
    )
}

export default function Template() {
    const [isBot, setIsBot] = useState(false);

    function loadTemplate() {

        var folderName = this.getAttribute("data-folder");
        var fileName = this.getAttribute("data-name");

        localStorage.setItem("folderName", folderName);
        localStorage.setItem("fileName", fileName);

        console.log(localStorage.getItem("folderName") + localStorage.getItem("fileName"));
        var src = require(`../../assets/Booktemplates/${folderName}/${fileName}.json`);
        console.log("page 1\n" + src.html);
        setTimeout(() => {
            document.getElementById("panel").innerHTML = src.html;
        }, 2000);

    };

    React.useEffect(() => {

        if (window.location.pathname.includes("/")) {
            setIsBot(true);
        }

        var element = document.getElementsByClassName(`${styles.templateImage}`);
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener('click', loadTemplate, false);
        }
    }, [setIsBot]);
    console.log(window.location.pathname);
    return (
        <div>
            <div id="chatBot" >
                {isBot ? <Chatbot /> : ""}
            </div>

            <div className={styles.headerContainer}>
                <div className={styles.title}>
                    Template gallery
                </div>
            </div>
            <div className={styles.templateContainer}>
                <div className={styles.images}>
                    {templatelist.blank.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Books
                </div>
                <div className={styles.images}>
                    {templatelist.default.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Business
                </div>
                <div className={styles.images}>
                    {templatelist.business.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Education
                </div>
                <div className={styles.images}>
                    {templatelist.education.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Legal
                </div>
                <div className={styles.images}>
                    {templatelist.legal.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Proposals
                </div>
                <div className={styles.images}>
                    {templatelist.proposals.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Reports
                </div>
                <div className={styles.images}>
                    {templatelist.reports.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Resumes
                </div>
                <div className={styles.images}>
                    {templatelist.resumes.map(insertPreview)}
                </div>

                <div className={styles.templateTitle}>
                    Work
                </div>
                <div className={styles.images}>
                    {templatelist.work.map(insertPreview)}
                </div>
            </div>
        </div>
    );
}

