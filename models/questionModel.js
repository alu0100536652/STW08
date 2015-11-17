(function(exports){
    
    var quizCollection = [
        {id: 1, type:"Ciencia", question:"¿Cuantos planetas tiene el sistema solar?",response1: "6",response2: "7",response3: "8",response4: "5", result: "8"},
        {id: 2, type:"Deporte", question:"¿En que año España gano el mundial de futbol?",response1: "2011",response2: "2010",response3: "2009",response4: "2012", result: "2010"},
        {id: 3, type:"Entretenimiento", question:"¿Cuantas peliculas hay de la saga Stars Wars?",response1: "8",response2: "9",response3: "7",response4: "6", result: "7"},
        {id: 4, type:"Geografia", question:"¿Cual es la capital de Madagascar?",response1: "Morondava",response2: "Antananarivo",response3: "Manakara",response4: "Mahajanga", result: "Antananarivo"},
        {id: 5, type:"Historia", question:"¿En que año colon descubrio america?",response1: "1492",response2: "1321",response3: "1504",response4: "1453", result: "1492"},
        {id: 6, type:"Arte y Literatura", question:"¿Quién pintó La Capilla Sixtina?",response1: "Giorgio Vasari",response2: "Leonardo Da Vinci",response3: "Miguel Ángel",response4: "Tiziano", result: "Miguel Ángel"}
    ];
    
    function Quiz() {
        this.question = function(id) {
            return quizCollection[id];
        }
        this.check = function(questionId) {
            for (var i = 0; i < quizCollection.length; i++) 
                if (quizCollection[i].id == questionId)
                    return quizCollection[i].result;
        }
        this.allQuestions = function()
        {
            return quizCollection;
        }
    }
    
    exports.Quiz = Quiz;
    
})(this);