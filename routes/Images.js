const express = require('express');
const router = express.Router();
const imageCtrl = require('../controllers/Images');



router.get('/', imageCtrl.index);
router.get('/new', imageCtrl.form);
router.get('/:id/edit', imageCtrl.form);
router.get('/:id', imageCtrl.show);
router.post('/', imageCtrl.create);
router.delete('/:id', imageCtrl.remove);
router.post('/:id', imageCtrl.update);
router.post('/:id/delete', imageCtrl.remove);







module.exports = router;