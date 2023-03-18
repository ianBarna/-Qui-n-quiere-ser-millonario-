class game {

    constructor(questionArray) {
        this.questions = questionArray;
        this.initGame()
     }
     initGame() {
        let question = this.questions[2].question;
        let options = this.questions[2].options;
        let answer = this.questions[2].answer;
        
        let quest1 = document.querySelector(".preguntas")
        quest1.innerHTML = question

        let bottons = document.querySelector(".respuestas")
        options.forEach((element, index) => {
            let crearBoton = document.createElement("button")
            bottons.appendChild(crearBoton)
            crearBoton.innerText = element
            crearBoton.setAttribute("name", index)
            crearBoton.addEventListener('click', function() {
                let checkNumber = parseInt(this.getAttribute("name"));
                
                if (checkNumber === answer) {
                    console.log("ok")
                }
                else {
                  console.log("error")
                }

            });
        });

     }
    
}

let newGame = new game (questions);



