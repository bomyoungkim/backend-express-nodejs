const express = require('express');
const router = express.Router();

const sponsorController = require('../controller/sponsorController.js');

router.get('/', sponsorController.getSponsors);

router.post('/add', sponsorController.addSponsors);

router.delete('/delete', sponsorController.removeSponsors);

module.exports = router;