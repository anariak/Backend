const pdf = require('html-pdf')
const moment = require('moment')


const contenido =`
<h1> Solicitud de vacaciones </h1>
<h3> Fecha y Hora de solicitud ${ moment.now() } </h3>



`
pdf.create(contenido).toFile('./vacaciones.pdf', (req, res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})