import { NavLink } from 'react-router-dom'
import styles from './LinkWithIcon.module.scss'

const LinkWithIcon = ({ to, icon }) => {
  return (
    <NavLink className={styles.linkWithIcon} to={to}>
      {icon}
    </NavLink>
  )
}

export default LinkWithIcon
