const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))
const productRouter = require('./routes/Products')
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home", { name: 'World!', 'users': [
        { name: 'Justin Workman', email: 'jworkman@fullsail.com' },
        { name: 'Shelby Tufail', email: 'stufail@fullsail.com' },
        { name: 'John Doe', email: 'jdoe@fullsail.com' },

    ]})
})

app.use("/products", productRouter)

app.listen(3000)