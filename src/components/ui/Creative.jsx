import Header from '../layuot/Header/Header'
import Main from '../layuot/Main/Main'

import styles from './Creative.module.scss'
const Creative = () => {
  return (
    <>
      <div className="complex-gradient"></div>
      <div className={styles.creative}>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default Creative
