const elementButtonAdd = document.querySelector(".container__box--button");
const elementInput = document.querySelector(".container__box--input");
const elementOutput = document.querySelector(".container__list");
const elementDelete = document.querySelector(".container__button--trash");

let arrayTarea = []

const getArrayTarea = () => {
    let array = JSON.parse(localStorage.getItem("arrayTarea"))
    return array
}

const setArrayTareas = () => {
    localStorage.setItem("arrayTarea",JSON.stringify(arrayTarea))
}

const agregarTarea = (tarea) => {
    let objTarea={
        descripcion: tarea
    }
    arrayTarea = getArrayTarea()
    arrayTarea.push(objTarea)
    setArrayTareas()
}