import styles from './Navigation.module.scss'

const Navigation = ({ isActive, onClose }) => {
  return (
    <>
      <div
        className={`${styles.navOverlay} ${isActive ? `${styles.active}` : ''}`}
        onClick={onClose}
      />
      <nav className={`${styles.nav} ${isActive ? `${styles.active}` : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Home</li>
          <li className={styles.navListItem}>About us</li>
          <li className={styles.navListItem}>Gallery</li>
          <li className={styles.navListItem}>Contact us</li>
          <li className={styles.navListItem}>Search</li>
        </ul>
      </nav>
    </>
  )
}
export default Navigation
