const express = require('express')
const router = express.Router()

module.exports = function(){
    router.post('/personas',(req, res)=>{
        const personas = req.body
        console.log(personas)
        res.status(200).send('data ingresada correctamente')
    })
    return router
}

