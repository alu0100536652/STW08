var QuizModule = require('../models/questionModel'),
    question;
    
exports.questionsList = function(req, res, next) {
    var allQuestions = new QuizModule.Quiz().allQuestions();
    var array = new Array();
    for(var i=0; i < allQuestions.length; i++) 
        array[i] = allQuestions[i]['question']
    
    console.log(array)
    res.render('partials/questionsList', {questions: array})
};

exports.question = function(req, res, next) {
    var id = req.params.id;
    var allQuestions = new QuizModule.Quiz().question(id);
    res.render('partials/question', allQuestions)
};

exports.questionCheck = function(req, res, next) {
    var question = new QuizModule.Quiz();
    var array = question.question(req.body.id-1);
    var resultValue
    if (req.body.response == question.check(req.body.id))
        resultValue = "Correcto"
    else
        resultValue = "Incorrecto"
    res.render('partials/questionResult', {result: resultValue, type: array['type'], question: array['question']})
};
