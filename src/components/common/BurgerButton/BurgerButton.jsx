import styles from './BurgerButton.module.scss'

const BurgerButton = () => {
  return (
    <button className={styles.burger} aria-label="Открыть меню">
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default BurgerButton
