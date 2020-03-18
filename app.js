const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/routes')
const morgan = require('morgan')
//middlewares
app.use(morgan('dev'))
//bodyparser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:false }))


//routes
app.use('/', router())


app.listen(port,()=>{
    console.log(`servidor corriendo en puerto ${port}`)
})