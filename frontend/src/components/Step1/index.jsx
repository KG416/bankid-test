// style
import styles from './Step1.module.scss'
import btnStyles from '../ButtonAndLink.module.scss'

// components
import Button from '../Button'
import BankIdLogo from '../BankIdLogo'

const Step1 = ({ onBankIDClick, headerText }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{headerText}</h2>
      <Button variant="primary" onClickButton={onBankIDClick}>
        <span className={btnStyles.btnSvgWrapper}>
          <BankIdLogo color="white" />
        </span>
        BankID
      </Button>
      <Button disabled variant="primary">
        Annat e-id
      </Button>
      <Button disabled variant="primary">
        Annan metod
      </Button>
    </div>
  )
}

export default Step1
