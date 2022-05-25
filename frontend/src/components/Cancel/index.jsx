import Button from '../Button'
import bankIdFetch from '../../api/bankIdFetch'
import { useState } from 'react'

const Cancel = ({ orderRef, setUserMessage }) => {
  const [disabled, setDisabled] = useState(false)

  const handleCancel = async () => {
    setDisabled(true)
    setUserMessage('Avbryter...')

    const response = await bankIdFetch('cancel', { orderRef })

    // if BankID API responds with {} the cancel is successful
    if (
      response &&
      Object.keys(response).length === 0 &&
      Object.getPrototypeOf(response) === Object.prototype
    )
      return console.log('Cancel response from API: OK')

    // error
    console.log('Bad response from FE cancel')
  }

  return (
    <Button
      variant='secondary'
      onClickButton={handleCancel}
      disabled={disabled}
    >
      Avbryt
    </Button>
  )
}

export default Cancel
