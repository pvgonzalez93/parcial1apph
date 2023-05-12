import * as service from '../../services/products.services.js'

function getProducts(req, res) {

    const filter = req.query

    service.getProducts({filter})
        .then(function (products) {
            res.status(200).json(products)
        })

}

function getProductosCliente (req, res) {

    const clienteId = req.params.clienteId

    service.getProducts({ clienteId: clienteId })
        .then(products => {
            if(products.length === 0) {
                res.status(404).json({ error: 'No se encontraron proyectos de ese cliente' })
            } else {
                res.status(200).json(products)
            }
        })
}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        description: req.body.description,
        link:req.body.link,
        img:req.body.img,
        technologies:req.body.technologies,
        section:req.body.section,
        clienteId: req.body.clienteId
    }
    service.createProduct(product)
        .then(function (product) {
            res.status(201).json(product)
        })
}

//function getProductById(req, res) {
//    const idProduct = req.params.idProduct

//    service.getProductById(idProduct)
//        .then(function (product) {
//            if (product) {
//                res.status(200).json(product)
//            }
//            else {
//                res.status(404).json({ error: { message: `Producto #${idProduct} no encontrado.` } })
//            }
//        })
//}



function updateProduct(req, res) {
    const idProduct =req.params.idProduct

    const product = {}

    if (req.body.name) {
        product.name = req.body.name
    }

    if (req.body.description) {
        product.description = req.body.description
    }

    if (req.body.link) {
        product.link = req.body.link
    }

    if (req.body.img) {
        product.img = req.body.img
    }

    if (req.body.technologies) {
        product.technologies = req.body.technologies
    }

    if (req.body.section) {
        product.section = req.body.section
    }

    if (req.body.clienteId) {
        product.clienteId = req.body.clienteId
    }

    service.editProduct(idProduct, product)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `Producto #${idProduct} no encontrado.` } })
            }
        })
}

function deleteProduct(req, res) {
    const id = req.params.idProduct

    service.deleteProduct(id)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `Producto #${idProduct} no encontrado.` } })
            }
        })
}


export {
    getProducts,
    getProductosCliente,
    createProduct,
    deleteProduct,
    updateProduct
}