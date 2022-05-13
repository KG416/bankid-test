const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

require('dotenv').config()
app.use(express.json())

app.use('/api/', require('./backend/http/routes/bankIdRoutes'))

app.listen(PORT, () => {
    const url = `http://localhost:${PORT}/`
    console.log(`listening on ${url}`)
})