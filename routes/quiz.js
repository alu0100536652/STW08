var express = require('express'),
    router = express.Router(),
    quizControllerModule = require('../controllers/quizController');

router.get('/', quizControllerModule.questionsList);
router.get('/:id', quizControllerModule.question);
router.post('/:id', quizControllerModule.questionCheck);

module.exports = router;
