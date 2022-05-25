const bankIdFetch = async (method, params) => {
    try {
        const res = await fetch(`/api/bankid/${method}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })

        if (!res.ok) return

        const data = await res.json()
        return data
    } catch (err) {
        console.log('bankIdFetch: ', err)
    }
}

export default bankIdFetch