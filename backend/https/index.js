const axiosLib = require('axios')
const fs = require('fs')
const https = require('https')
const to = require('await-to-js').to

const configs = {
    /* prod: {
      mobileBankIdPolicy: '1.2.752.78.1.5',
      bankdIdUrl: 'https://appapi2.bankid.com/rp/v5.1',
      pfx: 'ADD PRODUCTION CERT HERE',
      passphrase: 'ADD PASSPHRASE HERE',
      ca: fs.readFileSync(`./cert/prod.ca`),
    }, */
    test: {
        mobileBankIdPolicy: '1.2.3.4.25',
        bankdIdUrl: 'https://appapi2.test.bankid.com/rp/v5.1',
        pfx: fs.readFileSync('./cert/FPTestcert3_20200618.p12'),
        ca: fs.readFileSync('./cert/test.ca'),
        passphrase: 'qwerty123',
    }
}

const config = configs.test

const axios = axiosLib.create({
    httpsAgent: new https.Agent({
        pfx: config.pfx,
        passphrase: config.passphrase,
        ca: config.ca,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})

async function call(method, params) {
    console.log('call', 'method:', method, 'params:', params)
    const [error, response] = await to(axios.post(`${config.bankdIdUrl}/${method}`, params))
    
    // if (error) return { error }

    if (error) {
        console.error('Error in call', error)
        if (error?.response && error?.response?.data) {
            if (method === 'collect') return console.log('collect canceled from RP frontend (client app, not BankID app)')
            if (error.response.data.errorCode === 'alreadyInProgress') {
                console.error('You would have had to call cancel on this orderRef before retrying')
                console.error('The order should now have been automatically cancelled by this premature retry')
            }
        }
        return { error }
    }

    return response.data
}

const auth = async (endUserIp, ...optionalParams) => {
    const params = {
        endUserIp,
    }

    return await call('auth', params)
}

const sign = async (endUserIp, userVisibleData, ...optionalParams) => {
    const params = {
        endUserIp,
        userVisibleData: Buffer.from(userVisibleData).toString('base64'),
    }

    return await call('sign', params)
}

const collect = async orderRef => await call('collect', { orderRef })
const cancel = async orderRef => await call('cancel', { orderRef })

module.exports = {
    auth,
    sign,
    collect,
    cancel,
}