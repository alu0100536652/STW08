var express = require('express'),
    router = express.Router(),
    trivialControllerModule = require('../controllers/trivialController');

router.get('/', trivialControllerModule.trivial);
router.post('/', trivialControllerModule.result);

module.exports = router;
