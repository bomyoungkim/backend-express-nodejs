const express = require('express');
const router = express.Router();

const countryController = require('../controller/countryController.js');

router.get('/', countryController.getCountries);

router.post('/add', countryController.addCountries);

router.delete('/delete', countryController.removeCountries);

module.exports = router;