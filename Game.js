class game {

    constructor(questionArray) {
        this.question = questionArray[0].question;
        this.option = questionArray[0].options;
        this.answer = questionArray[0].answer;
     };
    
     addNewQuestion () {
        this.question = document.querySelector(".preguntas");
     }
     addNewOptions() {
        this.option = document.querySelector(".respuestas")
     }
     
    
}
let newGame = new game (questions);



