(function(exports){
    
    function QuizCollectionQuestions()
    {
        return [
            {
                id: 0,
                question: new ShortQuestion('¿Cuántos continentes hay en el mundo?'),
                answer: new Answer(7)
            },
            {
                id: 1,
                question: new LongQuestion('¿Quien reinaba en España cuando se descubrió América?'),
                answer: new Answer(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i)
            }]
    }
    
    function Question(value) {
        this.question = value
        this.getQuestion = function() {
            return this.question
        }
    }
    
    function ShortQuestion(value) {
        Question.call(this,value);
    }
    
    function LongQuestion(value) {
        Question.call(this,value);
    }
    
    function Answer(valueAnswer) {
        this.value = valueAnswer
        switch(typeof valueAnswer) {
            case 'string':
                return function(x) {
                    return this.value === x
                }
                break;
            case 'RegExp':
                return function(x) {
                    return this.value.exec(x)
                }
                break;
            default:
                return this.value;
        }
    }
    
    exports.QuizCollectionQuestions = QuizCollectionQuestions
    exports.Answer = Answer
    exports.Question = Question
    exports.LongQuestion = LongQuestion
    exports.ShortQuestion = ShortQuestion
    
})(this);