import { useState, useRef } from 'react'

import styles from './Navigation.module.scss'

const Navigation = ({ isActive, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const navItems = ['Home', 'About us', 'Gallery', 'Contact us', 'Search']
  const navRef = useRef(null)

  const handleLinkClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      <div className={`${styles.navOverlay} ${isActive ? styles.active : ''}`} onClick={onClose} />

      <nav ref={navRef} className={`${styles.nav} ${isActive ? styles.active : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={item} className={styles.navListItem}>
              <a
                className={`${styles.navListLink} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => handleLinkClick(index)}
              >
                {item}
              </a>
            </li>
          ))}
          <div className={styles.navHighlight} />
        </ul>
      </nav>
    </>
  )
}

export default Navigation
