/*
<section class="container">
      <h1 class="container__title">TO DO LIST</h1>
      <div class="container__box">
        <input
          class="container__box--input"
          type="text"
          placeholder="Añadir tarea..."
        />
        <button class="container__box--button">AÑADIR</button>
      </div>
      <div class="container-list">
        <div class="container-list__form">
          <p class="container-list__form--text">Tarea prueba</p>
          <div>
            <button class="container-list__form--pencil">
              <span class="icon-pencil"></span>
            </button>
            <button class="container-list__form--erase">
              <span class="icon-trash"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
*/
const elementButtonAdd = document.querySelector(".container__box-button");
const elementInput = document.querySelector(".container__box-input");
const elementTareaCont = document.querySelector(".container-list");
//const elementTarea = document.querySelector(".container-list__form");
//const elementNombreTarea = document.querySelector(".container-list__form-text");
//const elementTareaBtn = document.querySelector(".container-list__btn");
//const elementTareaEdit = document.querySelector(".container-list__form-pencil");
//const elementTareaErase = document.querySelector(".container-list__form-erase");



//Variables

let arrayTareas = [];
let contador;
let dataObject;
let iD = 0;

//functions

function anadirTarea (tarea) {
    crearObjetoArray(tarea);
    anadirLocal(arrayTareas);
    pintarTareas (dataObject);
    borrarInput();
}

function borrarInput(){
    elementInput.value='';
}

function pintarTareas (array){

    for (let i=0 ; i<array.length ; i++);

    let elementTareaCont = document.createElement('div');
    elementTareaCont.classList.add('container-list');
    
    let elementTarea = document.createElement('div');
    elementTarea.classList.add('container-list__form');
    
    let elementNombreTarea = document.createElement('p');
    elementNombreTarea.classList.add('container-list__form-text');
    
    let elementTareaBtn = document.createElement('div');
    elementTareaBtn.classList.add('container-list__btn');
    
    let elementTareaEdit = document.createElement('button');
    elementTareaEdit.classList.add('container-list__form-pencil');
    
    let elementTareaErase = document.createElement('button');
    elementTareaErase.classList.add('container-list__form-erase');
    
    let elementIconEdit = document.createElement('span');
    elementIconEdit.classList.add('icon-pencil');
    
    let elementIconErase = document.createElement('span');
    elementIconErase.classList.add('icon-trash');

    elementTareaErase.appendChild(elementIconErase);
    elementTareaEdit.appendChild(elementIconEdit);
    elementTareaBtn.appendChild(elementTareaEdit);
    elementTareaBtn.appendChild(elementTareaErase);
    elementTarea.appendChild(elementNombreTarea);
    elementTareaCont.appendChild(elementTarea)

    elementNombreTarea.textContent = array[i].name;


}
function crearObjetoArray(tarea) {
    arrayTareas.push(arrayTareas[contador] = { name: tarea, estado: "Activo" , id: iD});
    contador++;
    iD++;
  }

function anadirLocal(array) {
  localStorage.setItem ('tarea', JSON.stringify(array));
  let data = localStorage.getItem('tarea');
  dataObject = JSON.parse(data);
  
}


//Eventos
elementButtonAdd.addEventListener("click", function () {anadirTarea(elementInput.value)});
