import styles from "./Sidebar.module.css";
import {
    CollectionsBookmarkOutlined, HomeOutlined, InsertDriveFileOutlined,
    LocalLibraryOutlined, ShoppingCartOutlined,
} from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function ProofreaderSidebar() {
    return (
        <nav className={`${styles.sidebar} col-md-3 col-lg-2 d-md-block bg-light sidebar collapse`}>
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className={styles.navItem}>
                        <Link to='/proofreader/dashboard' className={`${styles["nav-link"]}`} >
                            <HomeOutlined className={styles.icons} />
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <a className={`${styles["nav-link"]} `} >
                            <ShoppingCartOutlined className={styles.icons} />
                            Orders
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={`${styles["nav-link"]}`} >
                            <LocalLibraryOutlined className={styles.icons} />
                            Books
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={`${styles["nav-link"]}`} >
                            <CollectionsBookmarkOutlined className={styles.icons} />
                            My Gallery
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a className={`${styles["nav-link"]}`} >
                            <InsertDriveFileOutlined className={styles.icons} />
                            Reports
                        </a>
                    </li>
                </ul>

                <h6 className={`${styles["sidebar-heading"]} sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase`}>
                    <span>Saved reports</span>
                </h6>
                
            </div>
        </nav>
    )
}