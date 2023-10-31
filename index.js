const express = require('express')
const app = express()
<<<<<<< HEAD
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))
const productRouter = require('./routes/Products')

app.use("/products", productRouter)









=======

// GET /products/all HTTP/1.1, Page: 2, Sort: price, Order: desc

app.get('/products/:productName', (request, response) => {
    response.send('Product Page! Product name: Sort: price, Order: desc' + request.params.productName)
})


// GET /products/8719 HTTP/1.1.

app.get('/products/:productId', (request, response) => {
    response.send(
        'Product id: ' + request.params.productId,
        )
})

// GET /products/8719-small-red HTTP/1.1

app.get('/products/:productId-:productName', (request, response) => {
    response.send(
        'Product Page! Product name: ' + request.params.productName +
        'Product id: ' + request.params.productId,
        )
})
>>>>>>> c78ef293d9bab45bda6323f33f8f93d1dace7076





app.listen(3000)