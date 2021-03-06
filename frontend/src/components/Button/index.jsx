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
      className={`mainButton ${variant}`}>
      {children}
    </Component>
  )
}

export default Button
