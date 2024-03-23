require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use(router)

app.listen(port, () => {
  console.log(`listen by port: ${port}`)
})

module.exports=app
