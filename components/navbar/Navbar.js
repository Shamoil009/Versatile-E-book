import styles from "./Navbar.module.css"
import Logo from "../../assets/logo/logos_white_minHeight.png";
export default function Navbar() {
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <img src={Logo} className={`${styles.logo}`} />
            {/* <a className={`${styles['navbar-brand']}} navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6`}>Versatile E-Book</a> */}
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${styles.profiler} navbar-nav`}>
                <div className="text-nowrap">
                    <a className={`${styles["nav-link"]}} nav-link px-3`} href="#">Sign out</a>
                </div>
            </div>
            {/* <div className="flex-shrink-0 dropdown">
                    <a href="#" className="d-block link-secondary text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}



            {/* <div className="" id="navbar-list-4">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Dashboard</a>
                            <a className="dropdown-item" href="#">Edit Profile</a>
                            <a className="dropdown-item" href="#">Log Out</a>
                        </div>
                    </li>
                </ul>
            </div> */}
        </header>
    )
}