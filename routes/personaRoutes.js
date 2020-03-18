const express = require('express')
const router = express.Router()
//controlador
const personaController = require('../controller/persona')

router.get('/persona', personaController.personaLogin )
router.get('/persona/:personaId', personaController.personaData )
router.put('/persona/:personaId', personaController.personaData )
router.post('/persona/create/', personaController.personaCreate )