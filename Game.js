class game {

    constructor(questionArray) {
        this.questions = questionArray;
        this.initGame()
    }

    initGame() {

        let question = this.questions[0].question;
        let options = this.questions[0].options;
        let answer = this.questions[0].answer;

        let quest1 = document.querySelector(".preguntas")
        quest1.innerHTML = question

        let bottons = document.querySelector(".respuestas")

        options.forEach((element, index) => {

            let crearBoton = document.createElement("button")
            bottons.appendChild(crearBoton)
            crearBoton.innerText = element
            crearBoton.setAttribute("name", index)
            crearBoton.addEventListener('click', function () {

        //         let checkNumber = parseInt(this.getAttribute("name"));

        //         if (checkNumber === answer) {
        //             console.log("ok")
        //         }
        //         else {
        //             console.log("error")
        //         }
        //     });
        // });
    }
//----------------------------------------------------------------------------------

    checkAnswer(){
        let checkNumber = parseInt(this.getAttribute("name"));
        if(checkNumber !== answer || temporizer === 0){
            console.log("Game over")
        } else {
            console.log ("Correct!!")
            loadNewQuestion()
        }
    }

    loadNewQuestion(){
        this.questions.forEach(element){}
    }
}


let newGame = new game(questions);



