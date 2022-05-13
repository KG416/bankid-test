import { useEffect, useState } from 'react'

const useUserIp = () => {
  const [IP, setIP] = useState('')
  const TEST_IP = '127.0.0.1'
  const URL = 'https://geolocation-db.com/json/'

  const getUserIp = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setIP(data?.IPv4)
  }

  useEffect(() => {
    console.log('IP useEffect')
    IP && console.log('test IP used:', IP)
    setIP(TEST_IP)

    if (process.env.REACT_APP_ENV === 'production') {
      console.log('ALERT: production IP used')
      getUserIp()
    }
  }, [])

  return IP
}

export default useUserIp