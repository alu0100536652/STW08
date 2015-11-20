var QuizModule = require('../models/question')
    
exports.questionsList = function(req, res, next) {
    var allQuestions = new QuizModule.QuizCollectionQuestions(),
    array = new Array()
    for(var i=0; i < allQuestions.length; i++) 
        array[i] = allQuestions[i]['question'].getQuestion()
    
    res.render('partials/questionsListQuiz', {questions: array})
}

exports.question = function(req, res, next) {
    var id = req.params.id,
    allQuestions = new QuizModule.QuizCollectionQuestions()
    res.render('partials/quiz',{id: allQuestions[id]['id'],question: allQuestions[id]['question'].getQuestion()})
}

exports.questionCheck = function(req, res, next) {
    var id = req.params.id,
    allQuestions = new QuizModule.QuizCollectionQuestions(),
    resultValue
    console.log(allQuestions[id]['answer'])
    if (allQuestions[id]['answer'])
        resultValue = "Correcto"
    else
        resultValue = "Incorrecto"
    res.render('partials/quizResult', {result: resultValue, question: allQuestions[id]['question'].getQuestion()})
}
