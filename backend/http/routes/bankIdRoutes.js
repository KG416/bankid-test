const express = require('express')
const router = express.Router()
const {
    authController,
    signController,
    collectController,
    cancelController,
} = require('../controllers/bankidController.js')

router.post('/bankid/auth', authController)
router.post('/bankid/sign', signController)
router.post('/bankid/collect', collectController)
router.post('/bankid/cancel', cancelController)

module.exports = router