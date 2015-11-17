var QuizModule = require('../models/questionModel'),
    question;

exports.trivial = function(req, res, next) {
  var jsonDataCookie,
      id;
      
  if(req.cookies.id != undefined)
  {
    jsonDataCookie = JSON.parse(req.cookies.id) 
    console.log(jsonDataCookie)
    id = jsonDataCookie['id'];
  }
  else
    id = 0;
    
  question = new QuizModule.Quiz();
  res.render('partials/trivial', question.question(id));
};

exports.result = function(req, res, next) {
  console.log("Respuesta: " + req.body.response);
  console.log("Tiempo: " + req.body.time);
  var jsonDataCookie = JSON.parse(req.cookies.id)
  console.log(jsonDataCookie)
  var puntos;
  var number = req.body.id
  var aciertos = parseInt(jsonDataCookie['aciertos'])
  if ((req.body.time != undefined)&&(req.body.response == question.check(number)))
  {
    puntos = parseInt(req.body.time) + parseInt(jsonDataCookie['puntos']);
    aciertos++;
  }
  else
    puntos = 0 + parseInt(jsonDataCookie['puntos']);
  
  if(number < 6) {
    var jsonCookie = JSON.stringify({id: number++, aciertos: aciertos, puntos: puntos})
    res.cookie('id', jsonCookie);
    res.redirect("/trivial");
  }
  else
  {
    res.clearCookie('id');
    res.render('partials/result',{result: puntos, success: aciertos});
  }
};