const getUserIp = async () => {
    const TEST_IP = '127.0.0.1'
    const URL = 'https://geolocation-db.com/json/'

    if (process.env.REACT_APP_ENV === 'production') {
        const res = await fetch(URL)
        const data = await res.json()
        return data?.IPv4
    }

    console.log('TEST IP: ' + TEST_IP)
    return TEST_IP
}

export default getUserIp