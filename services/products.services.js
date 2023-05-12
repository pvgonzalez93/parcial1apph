import { MongoClient, ObjectId } from 'mongodb'

const cliente = new MongoClient("mongodb://127.0.0.1:27017")
const db = cliente.db("AH20231CP1")

async function getProducts(filter = {}) {

    const filterMongo = { deleted: { $ne: true } }

    //Me debe permitir filtrar
    if(filter?.section) {
        filterMongo.$text = {$search: filter.section}
    }

    if(filter?.technologies) {
        filterMongo.technologies = { $in: [filter.technologies] };
    }

    if (filter?.clienteId) {
        filterMongo.clienteId = filter.clienteId;
    }

    await cliente.connect()

    return db.collection('Projects').find(filterMongo).toArray()
}

//async function getProductById(idProduct) {
//    await client.connect()
//    return db.collection("Projects").findOne({ _id: new ObjectId(idProduct) })
//}

async function createProduct(product) {
    await cliente.connect()
    await db.collection("Projects").insertOne(product)
    return product
}

async function editProduct(idProduct, product) {
    await cliente.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(idProduct) }, { $set: product })
    return product
}

async function deleteProduct(idProduct) {
    await cliente.connect()
    await db.collection("Projects").deleteOne({ _id: new ObjectId(idProduct) })
    return {
        _id: idProduct
    }
}

export {
    getProducts,
    //getProductById,
    createProduct,
    editProduct,
    deleteProduct
}