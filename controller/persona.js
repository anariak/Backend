const personaSchema = require('../models/persona')


module.exports = personaLogin =( req, res) =>{
    const rut = req.params.value
    console.log(rut)
}
module.exports = personaData = (req, res) =>{
    const rut = sessionStorage.getItem('rut')
    
}
module.exports = personaCreate = (req, res) =>{
    const persona = req.params.data
    
}