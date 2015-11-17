var express = require('express'),
    router = express.Router(),
    indexControllerModule = require('../controllers/indexController');

router.get('/', indexControllerModule.index);

module.exports = router;
