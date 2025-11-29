import { useState } from 'react'

import BurgerButton from '../../common/BurgerButton/BurgerButton'
import Logo from '../../common/Logo/Logo'
import Navigation from '../Navigation/Navigation'

import styles from './Header.module.scss'

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const toogleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation isActive={isMenuActive} />
      <BurgerButton onClick={toogleMenu} isActive={isMenuActive} />
    </header>
  )
}

export default Header
