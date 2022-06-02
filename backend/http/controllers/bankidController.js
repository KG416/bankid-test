const {
    auth,
    sign,
    collect,
    cancel,
} = require('../../https')

const authController = async (req, res) => {
    const { endUserIp, personalNumber } = req.body

    try {
        const response = await auth(endUserIp, personalNumber)
        res.json(response)
    } catch (err) {
        res.status(500).json({ message: err.message + '(authController)' })
    }
}

const signController = async (req, res) => {
    const { endUserIp, userVisibleData } = req.body

    try {
        const signResponse = await sign(endUserIp, userVisibleData)
        res.json(signResponse)
    } catch (err) {
        res.status(500).json({ message: err.message + '(signController)' })
    }
}

const collectController = async (req, res) => {
    const { orderRef } = req.body

    try {
        const response = await collect(orderRef)

        // if order is successful, completionData should not be sent to front end
        if (response.status === 'complete') {
            const completionData = response?.completionData
            console.log(
                'Important info to RP = keep "ocspResponse", "signature" and "user" for future references/compliance/audit',
                {
                    ocspResponse: completionData?.ocspResponse.substring(0, 8) + '...', 
                    signature: completionData?.signature.substring(0, 8) + '...', 
                    user: completionData?.user
                }
            )
            return res.json({ status: response.status })
        }

        // if order is still pending
        res.json(response)
    } catch (err) {
        res.status(500).json({ message: err.message + '(collectController)' })
    }
}

const cancelController = async (req, res) => {
    const orderRef = req.body.orderRef

    try {
        const cancelResponse = await cancel(orderRef)
        res.json(cancelResponse)
    } catch (err) {
        res.status(500).json({ message: err.message + 'cancelController' })
    }

}

module.exports = {
    collectController,
    authController,
    signController,
    cancelController
}