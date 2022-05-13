import { NavLink } from 'react-router-dom'
import styles from '../ButtonAndLink.module.scss'

const Link = ({
  to,
  children,
  variant = 'primary',
}) => {
  return (
    <NavLink className={`${styles.buttonOrLink} ${styles[variant]}`} to={to}>
      {children}
    </NavLink>
  )
}

export default Link
