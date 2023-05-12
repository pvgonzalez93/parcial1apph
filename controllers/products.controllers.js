import * as services from '../services/products.services.js'
import * as views from '../views/products.views.js'


function home(req, res) {
    let html = '<h1> Bienvenido a Projects </h1>'

    html += '<nav> <ul><li><a href="/mobile">Mobile</a></li><li><a href="/landing">Landing</a></li><li><a href="/webapp">WebApp</a></li><li><a href="/ecommerce">Ecommerce</a></li><li><a href="/game">Game</a></li></ul></nav>'
    
    res.send(views.createPage('Bienvenido', html))
}

async function mobile(req, res) {
    const filter = {section: 'mobile'}
    const products = await services.getProducts(filter);
    
    let html = '<h1>Proyectos Mobile</h1>'

    html += '<ul>'
    products.forEach(product => {
        html += `<li>
        <div class="card">
        <img src="${product.img}"alt="${product.name}">
        <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Tecnologías: ${product.technologies}</p>
        <a href="${product.link}" >Ver Repositorio</a>
        </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Mobile', html))
}

async function landing(req, res) {
    const filter = {section: 'landing'}
    const products = await services.getProducts(filter);
    
    let html = '<h1>Proyectos Landing Page</h1>'

    html += '<ul>'
    products.forEach(product => {
        html += `<li>
        <div class="card">
        <img src="${product.img}"alt="${product.name}">
        <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Tecnologías: ${product.technologies}</p>
        <a href="${product.link}" >Ver Repositorio</a>
        </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Landing Page', html))
}

async function webapp(req, res) {
    const filter = {section: 'web'}
    const products = await services.getProducts(filter);
    
    let html = '<h1>Proyectos Web App</h1>'

    html += '<ul>'
    products.forEach(product => {
        html += `<li>
        <div class="card">
        <img src="${product.img}"alt="${product.name}">
        <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Tecnologías: ${product.technologies}</p>
        <a href="${product.link}" >Ver Repositorio</a>
        </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Web App', html))
}

async function ecommerce(req, res) {
    const filter = {section: 'e-commerce'}
    const products = await services.getProducts(filter);
    
    let html = '<h1>Proyectos E-commerce</h1>'

    html += '<ul>'
    products.forEach(product => {
        html += `<li>
        <div class="card">
        <img src="${product.img}"alt="${product.name}">
        <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Tecnologías: ${product.technologies}</p>
        <a href="${product.link}" >Ver Repositorio</a>
        </div>
        </div>
        </li>`
      })
    html += '</ul>'
    res.send(views.createPage('E-commerce', html))
}

async function game(req, res) {
    const filter = {section: 'games'}
    const products = await services.getProducts(filter);
    
    let html = '<h1>Proyectos Games</h1>'

    html += '<ul>'
    products.forEach(product => {
        html += `<li>
        <div class="card">
        <img src="${product.img}"alt="${product.name}">
        <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Tecnologías: ${product.technologies}</p>
        <a href="${product.link}" >Ver Repositorio</a>
        </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Game', html))
}

export {
    home,
    mobile,
    landing,
    webapp,
    ecommerce,
    game
}