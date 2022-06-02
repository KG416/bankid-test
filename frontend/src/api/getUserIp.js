export default async function getUserIp() {
    const TEST_IP = '127.0.0.1'
    const URL = 'https://geolocation-db.com/json/'
    let IP

    // if production
    if (process.env.REACT_APP_ENV === 'production') {
        const res = await fetch(URL)
        const data = await res.json()
        IP = data?.IPv4
    }

    // if test
    console.log('TEST IP: ' + TEST_IP)
    IP = TEST_IP
    
    return IP
}