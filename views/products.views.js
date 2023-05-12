
function createProductListPage(products) {
    let html = '<h1>Lista de productos</h1>'
    html += '<ul>'

    for (let i = 0; i < products.length; i++) {
        html += `<li>${products[i].name} <a href="/products/${products[i]._id}">Ver</a> <a href="/products/${products[i]._id}/edit">Modifcar</a> <a href="/products/${products[i]._id}/delete">Eliminar</a> </li>`
    }

    html += '</ul>'

    return createPage('Lista de productos', html)
}

function createProductPage(product) {
    let html = `<h1>${product.name}</h1>`
    html += `<p>${product.description}</p>`
    html += `<p>${product.link}</p>`
    html += `<p>${product.img}</p>`
    html += `<p>${product.technologies}</p>`
    html += `<p>${product.section}</p>`

    return createPage(product.name, html)
}

function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<link rel="stylesheet" href="./css/styles.css">'

    html += '<title>' + title + '</title></head><body>'

    html += '<a href="/">Inicio</a> | <a href="/products">Projectos</a> | <a href="/products/nuevo">Nuevo projecto</a>'

    html += content

    html += '</body></html>'

    return html
}

function createNewProductPage() {
    let html = `<h1>Crear nuevo projecto</h1>`
    html += `<form action="/products/nuevo" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="name">Nombre</label><br>    
        <input type="text" name="name" id="name"><br>

        <label for="description">Descripción</label><br>
        <textarea name="description" id="description" cols="30" rows="10"></textarea><br>

        <label for="link">Enlace:</label><br>
        <input type="url" id="link" name="link" required><br>

        <label for="img">Imagen:</label><br>
        <input type="url" id="img" name="img" required><br>

        <label for="technologies">Tecnologías utilizadas:</label><br>
        <input type="text" id="technologies" name="technologies[]" required><br>

        <label for="section">Sección:</label><br>
        <input type="text" id="section" name="section" required><br>

        <input type="submit" value="Crear">
    </form>`

    return createPage('Crear nuevo projecto', html)
}

function formEditProduct(product) {
    let html = `<h1>Modificar projecto #${product._id}</h1>`

    html += `<form action="/products/${product._id}/edit" method="POST" enctype="application/x-www-form-urlencoded">
    <label for="name">Nombre</label><br>    
    <input type="text" name="name" id="name"><br>

    <label for="description">Descripción</label><br>
    <textarea name="description" id="description" cols="30" rows="10"></textarea><br>

    <label for="link">Enlace:</label><br>
    <input type="url" id="link" name="link" required><br>

    <label for="img">Imagen:</label><br>
    <input type="url" id="img" name="img" required><br>

    <label for="technologies">Tecnologías utilizadas:</label><br>
    <input type="text" id="technologies" name="technologies[]" required><br>

    <label for="section">Sección:</label><br>
    <input type="text" id="section" name="section" required><br>

    <button type="submit">Modificar</button>
    </form>`

    return createPage('Modificar Projecto', html)
}

function formDeleteProduct(product) {
    let html = `<h1>Eliminar projecto #${product._id}</h1>`

    html += `<h1>${product.name}</h1>`
    html += `<p>${product.description}</p>`
    html += `<p>${product.link}</p>`
    html += `<p>${product.img}</p>`
    html += `<p>${product.technologies}</p>`
    html += `<p>${product.section}</p>`

    html += `<form action="/products/${product._id}/delete" method="POST" enctype="application/x-www-form-urlencoded">
        <p>¿Estás seguro de que quieres eliminar el projecto ${product.name}?</p>
        <button type="submit">Eliminar</button>
    </form>`

    return createPage('Eliminar Projecto', html)
}

export {
    createProductListPage,
    createProductPage,
    createPage,
    createNewProductPage,
    formEditProduct,
    formDeleteProduct,
}