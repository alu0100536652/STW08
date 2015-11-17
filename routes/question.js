var express = require('express'),
    router = express.Router(),
    questionControllerModule = require('../controllers/questionController');

router.get('/', questionControllerModule.questionsList);
router.get('/:id', questionControllerModule.question);
router.post('/:id', questionControllerModule.questionCheck);

module.exports = router;
