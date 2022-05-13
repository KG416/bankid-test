import styles from './BankIdLogo.module.scss'

const BankIdLogo = ({ color }) => {
  // eslint-disable-next-line no-undef
  const logo = require(`../../assets/BankID_logo_${color}.svg`)?.default
  return <img className={styles.logo} src={logo} alt='BankID logo' />
}

export default BankIdLogo
