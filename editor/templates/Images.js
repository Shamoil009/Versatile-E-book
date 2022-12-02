/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import styles from "./Template.module.css";
function clickme() {
    
    // var folderName = this.getAttribute("data-folder");
    // var fileName = this.getAttribute("data-name");

    // localStorage.setItem("folderName", folderName);
    // localStorage.setItem("fileName", fileName);

    // console.log(localStorage.getItem("folderName") + localStorage.getItem("fileName"));
    // var src = require(`./Booktemplates/${folderName}/${fileName}.json`);
    // console.log("page 1\n" + src.html);
    // setTimeout(() => {
    // if (!document.getElementById("panel")) {
    //     clickme();
    // }
    // document.getElementById("panel").innerHTML = src.html;
    //  }, 2000);
}

function Images(props) {

    var image = require(`../../assets/Booktemplates/previewpics/${props.filename}.PNG`);

    return (
        <div className={styles.imagePreview}>
            <Link to='/author/editor'>
                <img src={image} className={styles.templateImage} data-folder={props.type} data-name={props.filename} onClick={clickme} />
            </Link>
            <div className={styles.templateName}>
                {props.name}
            </div>
        </div>
    )
}

export default Images;