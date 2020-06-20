
const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/', userController.get);
router.get('/:id', userController.getById);
router.post('/', userController.post);
router.put('/:id', userController.put);
router.delete('/:id', userController.remove);

module.exports = router;