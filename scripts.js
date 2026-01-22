let para = document.querySelector("p")
let anses = document.querySelector("select")
let btn = document.querySelector(".button1")
let mistake = document.querySelector(".warning")

var answered = 0


function ans(){
    let chosen = anses.value
    if (chosen == "n"){
        mistake.textContent = "Выберите ответ"
        return
    }
    if (answered == 0 & chosen == 3){
        mistake.textContent = "Верный ответ"
    }
    else {
        mistake.textContent = "Вы ответили неверно, попробуйте ещё раз"
    }
}

btn.addEventListener("click", ans);