const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/Products')



router.get('/', productCtrl.index);
router.get('/new', productCtrl.form);
router.get('/:id/edit', productCtrl.form);
router.get('/:id', productCtrl.show);
router.post('/', productCtrl.create);
router.delete('/:id', productCtrl.remove);
router.post('/:id', productCtrl.update);
router.post('/:id/delete', productCtrl.remove);







module.exports = router