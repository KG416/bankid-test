// style
import styles from './Order.module.scss'

// libs
import { useState } from 'react'

// components
import Step1 from '../Step1'
import Step2 from '../Step2'
import ButtonOrLinkIcon from '../../components/ButtonOrLinkIcon'
import Cancel from '../Cancel'
import ChevronLeft from '../../components/icons/ChevronLeft'

// utils
import { launchNativeApp } from '../../utils/launchNativeApp'
import getUserIp from '../../utils/getUserIp'
import bankIdFetch from '../../utils/bankIdFetch'
import bankIdCollect from '../../utils/bankIdCollect'
import isMobile from '../../utils/isMobile'

function Order ({
  method = '',
  headerText = '',
  userVisibleData = '',
}) {
  // state
  const [orderRef, setOrderRef] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [userMessage, setUserMessage] = useState('')

  // variables
  const END_OF_ORDER_DELAY = 2000

  const handleOrder = async () => {
    setLoading(true)
    setUserMessage('BankID startar order, var god vänta')
    const endUserIp = await getUserIp()
    
    // ================ request = AUTH or SIGN ================== //
    const params = {
      endUserIp,
      ...(userVisibleData && { userVisibleData }),
      // ...(personalNumber && { personalNumber }),
      // ...(requirement ? requirement : {}),
      // ...(userNonVisibleData && userNonVisibleData),
      // ...(userVisibleDataFormat && userVisibleDataFormat),
    }

    // send auth or sign request to BankID's API
    const data = await bankIdFetch(method, params)
    setOrderRef(data.orderRef)
    launchNativeApp({
      isMobile: isMobile(),
      autoStartToken: data.autoStartToken,
    })

    // ================ request = COLLECT ================== //
    // bankIdCollect has a loop inside that runs every 2 seconds until -> order fails, is completed or is cancelled
    const result = await bankIdCollect(data.orderRef, setUserMessage)

    if (!result.ok) {
      setLoading(false)
      setUserMessage('Åtgärden avbruten')
      setTimeout(() => setStep(1), END_OF_ORDER_DELAY)
      return
    }

    setLoading(false)
    if (method === 'auth') {
      setUserMessage('Inloggningen lyckades')
    }
    if (method === 'sign') {
      setUserMessage('Signeringen lyckades')
    }

    setTimeout(() => setStep(1), END_OF_ORDER_DELAY)
  }

  return (
    <div className={styles.wrapper}>
      <ButtonOrLinkIcon to='/' variant='secondary' icon={<ChevronLeft />} />

      {step === 1 && (
        <Step1
          headerText={headerText}
          onBankIDClick={() => setStep((prevState) => prevState + 1)}
          setUserMessage={setUserMessage}
        />
      )}
      {step === 2 && (
        <Step2
          onClickOpenOnSameDevice={handleOrder}
          userMessage={userMessage}
        />
      )}

      {loading && (
        <Cancel setUserMessage={setUserMessage} orderRef={orderRef} />
      )}
    </div>
  )
}

export default Order
