const express = require('express');
const router = express.Router();

const cardtypeController = require('../controller/cardtypeController.js');

router.get('/', cardtypeController.getCardTypes);

router.post('/add', cardtypeController.addCardTypes);

router.delete('/delete', cardtypeController.removeCardTypes);

module.exports = router;