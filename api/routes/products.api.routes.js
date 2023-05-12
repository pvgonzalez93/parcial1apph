import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'

const route = Router()

route.get('/products', controller.getProducts)
route.post('/products', controller.createProduct)
route.patch('/products/:idProduct', controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)
route.get('/products/:clienteId', controller.getProductosCliente)


export default route