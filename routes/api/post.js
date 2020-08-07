const express = require('express');
const router = express.Router();

//Route            GET api/post
//Description      Test route
//Access           Public
router.get('/', (req, res) => res.send(' Post route'));

module.exports = router;