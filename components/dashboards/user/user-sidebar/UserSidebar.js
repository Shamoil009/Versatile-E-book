import styles from "./Sidebar.module.css";
import {
    CollectionsBookmarkOutlined, ForumOutlined, HomeOutlined, InsertDriveFileOutlined,
    LocalLibraryOutlined, ShoppingCartOutlined, StarRateOutlined,
} from '@mui/icons-material';
import { Link,NavLink } from "react-router-dom";

export default function UserSidebar() {
    return (
        <nav className={`${styles.sidebar} col-md-3 col-lg-2 d-md-block bg-light sidebar collapse`}>
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className={styles.navItem}>
                        <Link to='/user/dashboard' className={`${styles["nav-link"]}`} >
                            <HomeOutlined className={styles.icons} />
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/user/bookgallery' className={`${styles["nav-link"]}`} >
                            <CollectionsBookmarkOutlined className={styles.icons} />
                            My Gallery
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/user/favourite' className={`${styles["nav-link"]} `} href="#">
                            <StarRateOutlined className={styles.icons} />
                            Favourites
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