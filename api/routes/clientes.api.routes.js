import * as controller from '../controllers/clientes.api.controllers.js'
import { Router } from 'express'

const route = Router()

route.get('/clientes', controller.getClientes)
route.post('/clientes', controller.createCliente)
export default route