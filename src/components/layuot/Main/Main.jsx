import Button from '../../common/Button/Button'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Creative</h1>
      <p className={styles.mainDecription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod`
      </p>
      <Button />
      <section className={styles.mainBackgroundInfo}>
        <h2 className={styles.mainBackgroundInfoTitle}>Background</h2>
        <blockquote className={styles.mainQuote}>
          "<b>Lorem</b> ipsum dolor amet, consectetur adipiscing elit. <b>sed do eismod</b> tempor
          incididunt ut labore et dolore magna"
        </blockquote>
      </section>
    </main>
  )
}

export default Main
