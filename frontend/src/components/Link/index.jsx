import { NavLink } from 'react-router-dom'

const Link = ({
  to,
  children,
  variant = 'primary',
}) => {
  return (
    <NavLink className={`mainLink ${variant}`} to={to}>
      {children}
    </NavLink>
  )
}

export default Link
