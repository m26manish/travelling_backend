const express = require('express');
const Package = require('../models/Package');
const router = express.Router();

router.get('/', async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
});

module.exports = router;
