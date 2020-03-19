const pdf = require('html-pdf')
const moment = require('moment')

const contenidoPdf = `
 <h1> Soliciud de permiso </h1>
 <h3> con fecha ${ moment().calendar() } </h3> 
 
 `