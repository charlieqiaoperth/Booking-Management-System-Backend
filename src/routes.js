const express = require('express');
const routeCustomers = require('./routes/customers');
const routeHoles = require('./routes/drillholes')
const routeOrders = require('./routes/orders');
const routeCategories = require('./routes/categories');
const routeUsers = require('./routes/users');
const routeAuth = require('./routes/auth');

const router = express.Router();
router.use('/customers', routeCustomers);
router.use('/holes', routeHoles);
router.use('/users', routeUsers);
router.use('/auth', routeAuth);

module.exports = router;