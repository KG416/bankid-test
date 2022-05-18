// style
import styles from './Start.module.scss'

// components
import Link from '../../components/Link'
import BankIdLogo from '../../components/BankIdLogo'

const Start = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <BankIdLogo color="black" size="big" />
      </div>

      <Link to="/auth">Identifiering</Link>
      <Link to="sign">Signering</Link>
    </div>
  )
}

export default Start
