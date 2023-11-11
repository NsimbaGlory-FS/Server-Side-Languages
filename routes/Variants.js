const express = require('express');
const router = express.Router();
const variantCtrl = require('../controllers/Variants');



router.get('/', variantCtrl.index);
router.get('/new', variantCtrl.form);
router.get('/:id/edit', variantCtrl.form);
router.get('/:id', variantCtrl.show);
router.post('/', variantCtrl.create);
router.delete('/:id', variantCtrl.remove);
router.post('/:id', variantCtrl.update);
router.post('/:id/delete', variantCtrl.remove);







module.exports = router;