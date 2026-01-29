let para = document.querySelector("p")
let anses = document.querySelector("select")
let btn = document.querySelector(".button1")
let mistake = document.querySelector(".warning")

var answered = 0

para.textContent = ("Что возвращает функция math.sqrt(x)? \n1) Квадрат числа \n2) Кубический корень \n3) Квадратный корень числа \n4) Модуль числа")

function ans(){
    let chosen = anses.value
    if (chosen == "n"){
        mistake.textContent = "Выберите ответ"
        return
    }
    if (answered == 0 & chosen == 3){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = ("Какое значение вернёт math.pi? \n1) 3 \n2) 3.14 \n3) Точное значение π \n4) Приближённое значение π")
    }
    if (answered == 1 & chosen == 4){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = ("Что делает функция math.floor(4.9)? \n1) Округляет до ближайшего целого \n2) Округляет вверх \n3) Возвращает 4.9 \n4) Округляет вниз до 4")
    }
    if (answered == 2){
        mistake.textContent = "Верный ответ"
        para.textContent = ("Вопросов больше нет!")
    }
    else {
        mistake.textContent = "Вы ответили неверно, попробуйте ещё раз"
    }
}

btn.addEventListener("click", ans);