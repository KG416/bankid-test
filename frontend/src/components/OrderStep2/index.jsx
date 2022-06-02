// libs
import { useState } from 'react'

// components
import BankIdLogo from '../BankIdLogo'

// style
import styles from './OrderStep2.module.scss'

const OrderStep2 = ({ onClickOpenOnSameDevice, userMessage }) => {
  const [orderStarted, setOrderStarted] = useState(false)

  const handleOpenOnSameDevice = () => {
    setOrderStarted(true)
    onClickOpenOnSameDevice()
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <BankIdLogo color="black" size="big" />
      </div>

      <p className={styles.userMessage}>{userMessage && userMessage}</p>

      <div className={styles.info} style={orderStarted ? { display: 'none' } : {}}>
        <ul>
          <li>Starta BankID-appen på din mobil eller surfplatta</li>
          <li>Tryck på QR-kodknappen i appen</li>
          <li>Rikta kameran mot QR koden nedan</li>
        </ul>

        <p>(QR code here)</p>

        <button className={styles.link} onClick={handleOpenOnSameDevice}>
          Öppna BankID på denna enhet
        </button>
      </div>
    </div>
  )
}

export default OrderStep2
