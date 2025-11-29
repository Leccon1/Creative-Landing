import styles from './BurgerButton.module.scss'

const BurgerButton = ({ onClick, isActive }) => {
  return (
    <button
      className={`${styles.burger} ${isActive ? `${styles.active}` : ''}`}
      onClick={onClick}
      aria-label="Открыть меню"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default BurgerButton
