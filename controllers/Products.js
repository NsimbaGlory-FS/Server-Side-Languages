const Products = require('./models/Products')

const index = (req, res) => {
    const products = Products.all()
    res.render('views/products/index' , { products })
    // res.json(products)
}

const form = (req, res) => {
    res.send('Product.form')
}

const show = (req, res) => {
    const product = Products.find(req.params.id)
    //res.json(product)
    res.render('views/products/show', { product })
}

const create = (req, res) => {
    const product = Products.create(req.body)
    res.json(product)
}

const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.json(product)
}

const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.json(products)
}


module.exports = { index, form, show, create, update, remove }