const bankIdFetch = async (method, params) => {
    try {
        console.log('bankidFetch', 'params:', params, 'method:', method)
        const res = await fetch(`/api/bankid/${method}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })

        if (!res.ok) {
            console.log('bankIdFetch:', res?.status, res?.statusText)
            return
        }

        const data = await res.json()
        return data
    } catch (err) {
        console.log('bankIdFetch: ', err)
    }
}

export default bankIdFetch