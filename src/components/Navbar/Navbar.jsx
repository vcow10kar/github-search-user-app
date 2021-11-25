import styles from './navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar_parent}>
            <div className={styles.navbar}>
                <img src="/logos/github.png" alt="github-logo" />
                <h1>Look Up GitHub Users</h1>
            </div>

        </div>
    )
}

export default Navbar;