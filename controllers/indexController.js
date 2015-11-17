var QuizModule = require('../models/questionModel'),
    question;
    
exports.index = function(req, res, next) {
  var jsonCookie = JSON.stringify({id: 0, aciertos: 0, puntos: 0})
  res.cookie('id', jsonCookie);
  console.log(req.ip)
  res.render('partials/start');
};
