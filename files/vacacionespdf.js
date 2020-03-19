const pdf = require('html-pdf')
const moment = require('moment')


const contenido =`
<h1> Solicitud de vacaciones </h1>
<h3> Fecha y Hora de solicitud ${ moment().calendar() } </h3>
<p> Por la presente se realiza la solicitud de vacaciones por ${ dias },
los cuales corresponden a las fechas ${ FechaDesde } hasta ${ FechaHasta },
del presente año ${ moment().year() } a nombre de ${ persona.nombres, persona.ApellidoPaterno } con rut ${ persona.Rut } perteneciente a la seccion ${ persona.Seccion }
</p>

<h4> vacaciones </h4>
<p> la solicitud tiene un tiempo de espera de 48 horas habiles</p>
<p> Recuerde que la solicitud sera respondida por Cristian Sances o Eduardo Yusta

`
pdf.create(contenido).toFile('./vacaciones.pdf', (req, res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})