// style
import styles from './OrderStep1.module.scss'

// components
import Button from '../Button'
import BankIdLogo from '../BankIdLogo'

const OrderStep1 = ({ onBankIDClick, headerText }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{headerText}</h2>
      <Button variant="primary" onClickButton={onBankIDClick}>
        <span className="btnSvgWrapper">
          <BankIdLogo color="white" size="small" />
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

export default OrderStep1
