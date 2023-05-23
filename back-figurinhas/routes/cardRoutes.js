const express = require('express');
const router = express.Router();

const cardController = require('../controller/cardFileController');

router.get('/', cardController.getCards);

router.post('/add', cardController.addCards);

router.put('/update/:id', cardController.updateCards);

router.delete('/delete/:id', cardController.removeCards);

module.exports = router;