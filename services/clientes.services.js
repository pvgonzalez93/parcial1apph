import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient("mongodb://127.0.0.1:27017")
const db = cliente.db("AH20231CP1")

async function getClientes() {
    await cliente.connect()
    return db.collection('clientes').find().toArray()
}

async function createCliente(client){
    await cliente.connect()
    const clientes = db.collection('clientes')
    await clientes.insertOne(client)
    return cliente
}

export {
    getClientes,
    createCliente
}
