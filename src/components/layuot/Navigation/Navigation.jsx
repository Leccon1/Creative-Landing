import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>Home</li>
        <li className={styles.navListItem}>About us</li>
        <li className={styles.navListItem}>Gallery</li>
        <li className={styles.navListItem}>Contact us</li>
        <li className={styles.navListItem}>Search</li>
      </ul>
    </nav>
  )
}
export default Navigation
