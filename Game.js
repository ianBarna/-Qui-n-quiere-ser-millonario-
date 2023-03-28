class game {

    constructor(questionArray) {
        this.questions = questionArray;
        this.counter = 0;
        this.money = 0;
        this.time = 30;
        this.countdown = 0;
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
        this.temporizer();
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
        let answer = this.questions[this.counter].answer
        let checkNumber = parseInt(selectedOption.getAttribute("name"));  
        if (checkNumber !== answer){
            window.open("/millonario-game-over.html", "_self");           
        }
        

        if (checkNumber === answer) {
            this.counter++;
            if(this.counter === this.questions.length){
                 window.open("/millonario-you-won.html", "_self");
               
                }
            this.loadQuestions();
            this.moneyIncrement();
            clearInterval(this.countdown)

        
        }
       

     }

     moneyIncrement() {
        this.money += this.questions[this.counter].value
        let wallet = document.querySelector("#money")
        wallet.innerHTML = this.money;
     }

     temporizer(){

        this.time = 30;
        let timeDisplay = document.querySelector("#countdown")
        console.log(timeDisplay);
        timeDisplay.innerHTML = this.time

        this.countdown = setInterval(() =>{
        if(this.time > 0){
            this.time--;
            timeDisplay.innerHTML = this.time;
        }
        if(this.time === 0){
            window.open("/millonario-game-over.html", "_self");
        }
        },1000)
    }
}
     
let newGame = new game(questions);



