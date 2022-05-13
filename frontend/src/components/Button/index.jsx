import styles from '../ButtonAndLink.module.scss'

const Button = ({
  as: Component = 'button',
  children,
  onClickButton,
  variant = 'primary',
  disabled = false,
}) => {

  return (
    <Component
      disabled={disabled}
      onClick={onClickButton}
      className={`${styles.buttonOrLink} ${styles[variant]}`}>
      {children}
    </Component>
  )
}

export default Button
