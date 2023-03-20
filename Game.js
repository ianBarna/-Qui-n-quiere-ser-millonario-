class game {

    constructor(questionArray) {
        this.questions = questionArray;
        this.counter = 0;
        this.initGame()
     }
     initGame() {
        this.loadQuestions();
     }
     loadQuestions() {
        let question = this.questions[this.counter].question;
        let options = this.questions[this.counter].options;
        let quest1 = document.querySelector(".preguntas")
        let bottons = document.querySelector(".respuestas")
        quest1.innerHTML = question
        bottons.innerHTML = ""
        options.forEach((element, index) => {
            let crearBoton = document.createElement("button")
            bottons.appendChild(crearBoton)
            crearBoton.innerText = element
            crearBoton.setAttribute("name", index)
            crearBoton.addEventListener('click', (event) => {
                let selectedOption = event.currentTarget;
                this.checkAnswer(selectedOption);
            });
        });

     }
     checkAnswer(selectedOption) {
        let answer = this.questions[this.counter].answer;
        let checkNumber = parseInt(selectedOption.getAttribute("name"));  
        if (checkNumber === answer) {
            this.counter++;
            this.loadQuestions();

        } else {
            console.log("error")
        }

     }
    
}

let newGame = new game (questions);



