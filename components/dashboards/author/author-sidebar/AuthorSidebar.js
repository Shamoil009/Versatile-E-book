import styles from "./Sidebar.module.css";
import {
    CollectionsBookmarkOutlined, ForumOutlined, HomeOutlined, InsertDriveFileOutlined,
    LocalLibraryOutlined, MenuBookOutlined,
} from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function AuthorSidebar() {
    return (
        <nav className={`${styles.sidebar} col-md-3 col-lg-2 d-md-block bg-light sidebar collapse`}>
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className={styles.navItem}>
                        <Link to='/author/dashboard' className={`${styles["nav-link"]}`}>
                            <HomeOutlined className={styles.icons} />
                            Dashboard
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/author/template' className={`${styles["nav-link"]}`} href="#">
                            <MenuBookOutlined className={styles.icons} />
                            Editor
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/author/allbook' className={`${styles["nav-link"]}`} href="#">
                            <LocalLibraryOutlined className={styles.icons} />
                            Books
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/author/publishedbook' className={`${styles["nav-link"]}`} href="#">
                            <CollectionsBookmarkOutlined className={styles.icons} />
                            Published Books
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/feedbacksuggestion' className={`${styles["nav-link"]}`} href="#">
                            <ForumOutlined className={styles.icons} />
                            Feedback/Suggestion
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/complaint' className={`${styles["nav-link"]}`} href="#">
                            <InsertDriveFileOutlined className={styles.icons} />
                            Complaint
                        </Link>
                    </li>
                </ul>

                <h6 className={`${styles["sidebar-heading"]} sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase`}>
                    <span>Saved reports</span>
                </h6>

            </div>
        </nav>
    )
}