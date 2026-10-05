const express = require('express');
const router = express.Router();
const routerUser = require('./api/user');
const routerMenu = require('./api/menu');
const routerOrder = require('./api/order');

router.use('/api', routerOrder);
router.use('/users', routerUser);
router.use('/', routerMenu);

module.exports = router;