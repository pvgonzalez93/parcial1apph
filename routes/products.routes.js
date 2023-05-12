
import express from 'express'
import * as productscontrollers from '../controllers/products.controllers.js'

const route = express.Router()

route.get('/', productscontrollers.home)
route.get('/mobile', productscontrollers.mobile)
route.get('/landing', productscontrollers.landing)
route.get('/webapp', productscontrollers.webapp)
route.get('/ecommerce', productscontrollers.ecommerce)
route.get('/game', productscontrollers.game)


export default route