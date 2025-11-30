import { useState } from 'react'

import styles from './Button.module.scss'

const Button = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)

    // Меняем тему на всем документе
    if (!isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
    </button>
  )
}

export default Button
