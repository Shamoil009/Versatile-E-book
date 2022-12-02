import styles from "./Sidebar.module.css";
import {
   ForumOutlined, HomeOutlined, InsertDriveFileOutlined,
    LocalLibraryOutlined, PeopleOutlined, PersonAddOutlined,
} from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function AdminSidebar() {
    return (
        <nav className={`${styles.sidebar} col-md-3 col-lg-2 d-md-block bg-light sidebar collapse`}>
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className={styles.navItem}>
                        <Link to='/admin/dashboard' className={`${styles["nav-link"]}`} href="#">
                            <HomeOutlined className={styles.icons} />
                            Dashboard
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/admin/addproofreader' className={`${styles["nav-link"]} `}>
                            <PersonAddOutlined className={styles.icons} />
                            Add Proofreader
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/admin/viewalluser' className={`${styles["nav-link"]} `}>
                            <PeopleOutlined className={styles.icons} />
                            Users
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/admin/publishedbook' className={`${styles["nav-link"]}`}>
                            <LocalLibraryOutlined className={styles.icons} />
                            Published Books
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/admin/viewfeedbacksuggestion' className={`${styles["nav-link"]}`} href="#">
                            <ForumOutlined className={styles.icons} />
                            Feedback/Suggestions
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to='/admin/viewcomplaint' className={`${styles["nav-link"]}`} href="#">
                            <InsertDriveFileOutlined className={styles.icons} />
                            Complaints
                        </Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}