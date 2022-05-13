import { NavLink } from 'react-router-dom'
import styles from '../ButtonAndLink.module.scss'

const ButtonOrLinkIcon = ({ to, icon }) => {
  return (
    <NavLink className={styles.buttonOrLinkIcon} to={to}>
      {icon}
    </NavLink>
  )
}

export default ButtonOrLinkIcon
