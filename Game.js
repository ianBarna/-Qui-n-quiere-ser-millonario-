class game {

    constructor(questionArray) {
        this.questions = questionArray;
        this.question = questionArray[1].question;
        this.option = questionArray[0].options;
        this.answer = questionArray[0].answer;
        this.initGame()
        console.log(this.questions)
     }
     initGame() {
        let question = this.questions[0].question;
        let options = this.questions[0].options;
        
        let quest1 = document.querySelector(".preguntas")
        quest1.innerHTML = question

        let bottons = document.querySelector(".respuestas")
        options.forEach(element => {
            
        });


     }
    
     addNewQuestion () {
        this.question = document.querySelector(".preguntas");
     }
     addNewOptions() {
        this.option = document.querySelector(".respuestas")
     }
}
let newGame = new game (questions);



