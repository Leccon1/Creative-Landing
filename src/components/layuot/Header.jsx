const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Landing
        <span>logo</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Home</li>
          <li className={styles.navListItem}>About us</li>
          <li className={styles.navListItem}>Gallery</li>
          <li className={styles.navListItem}>Contact us</li>
          <li className={styles.navListItem}>Search</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
