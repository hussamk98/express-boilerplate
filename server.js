const express = require('express')
const app = express()
const path = require('path')

//load routes
const User = require('./routes/User')

//middlewares
app.use(express.json())
app.use(express.static(path.join('public')))

app.use('/user', User)

//listen server
const server = app.listen(process.env.PORT || 5000, (err) => {
    if (!err) console.log(`server listening at PORT ${process.env.PORT || 5000}`)
    else console.log(err)
})
