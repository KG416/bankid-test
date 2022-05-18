import styles from './BankIdLogo.module.scss'

const BankIdLogo = ({ color, size = 'big' }) => {
  const logo = require(`../../assets/BankID_logo_${color}.svg`)?.default

  return <img className={`${styles.logo} ${styles[size]}`} src={logo} alt="BankID logo" />
}

export default BankIdLogo
