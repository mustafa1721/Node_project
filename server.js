const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const version = require('./package.json').version
const PORT = 3000
const { orderRouter } = require('./routes/orderRouter')
const { userRouter } = require('./routes/userRouter')
const { connectionString } = require('./config')

mongoose.connect(connectionString)
    .then(() => console.log(`DB connection successfull`))
    .catch(err => console.log(`Error while connecting to the DB :${err}`))


app.use(express.json())
app.use('/users', userRouter)
app.use('/orders', orderRouter)
app.get('/', (req, res, next) => {
    console.log(`Application is up with version ${version}`)
})



app.listen(PORT || 3000, () => {
    console.log(`Server listening on port ${PORT}`)
})