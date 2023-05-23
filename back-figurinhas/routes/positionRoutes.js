const express = require('express');
const router = express.Router();

const positionController = require('../controller/positionController.js');

router.get('/', positionController.getPositions);

router.post('/add', positionController.addPositions);

router.delete('/delete', positionController.removePositions);

module.exports = router;