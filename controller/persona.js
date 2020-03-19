const personaSchema = require('../models/persona')
const op = require('sequelize').Op
module.exports = personaLogin =( req, res) =>{
    const rut = req.params.value
    if(rut.includes('-')){
        const query = personaSchema.find({
            where:{
                rut:rut
            }})
        if(query){
            res.status(200).send({ 
                message: `el ${rut} existe y es valido`}),
            rut
        }else{
            res.status(500).send({ 
                message: `no ${rut} no es un usuario existente`}),
            rut}
    }else{
        res.send({
            message: "favor enviar un valor valido"
        })}  
    if(query){
        res.status(200).send({
            message: "usuario existe",
            rut})
    }else{
        res.send(404).send({
            message:"no existe el usuario",
            rut
        })}}

module.exports = personaData = (req, res) =>{
    const rut = sessionStorage.getItem('rut')
    const query = personaSchema.find({
        where:{
            rut:rut
        }
    })
}
module.exports = personaCreate = (req, res) =>{
    const persona = req.params.data
    
}