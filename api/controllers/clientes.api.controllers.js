import * as service from '../../services/clientes.services.js'

function getClientes(req, res) {
        service.getClientes()
        then(clientes => {
        if(clientes.length === 0) {
            res.status(404).json({ error: 'No se encontraron clientes' })
        } else {
            res.status(200).json(clientes)
        }
    })

}

function createCliente(req, res) {
    const cliente = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion
    }

    service.createCliente(idProduct, cliente)
        .then(function (cliente) {
            res.status(201).json(cliente)
        })

}

export {
    getClientes,
    createCliente
}