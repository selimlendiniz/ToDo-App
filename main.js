let toDoCard = document.getElementById("cardContainer");
let toDoInput = document.getElementById("toDoInput");
let toDoButton = document.getElementById("toDoButton");

let toDo = `<div class="border border-danger rounded col-3 p-3">
                   <input type="checkbox">
                   <b>Görev 1</b>
                </div>`;

let gorevListesi = [];

displayToDo();

toDoButton.addEventListener("click", onClickButton)
toDoInput.addEventListener("keypress", function (){
    if (event.key === "Enter"){
        toDoButton.click();
    }
})


function deleteTask(toDoId){

    let deletedId;
    for(let id in gorevListesi){
        if (gorevListesi[id].id == toDoId){
            deletedId  = id;
        }
    }

    gorevListesi.splice(deletedId,1);
    displayToDo();
}

function displayToDo(){


    let Todos = "";
    for (let toDo of gorevListesi){


        let completed = toDo.completed ? "checked" : "";
            Todos += `<div class="border border-danger mb-3 rounded col-3 p-3" style="display: flex; align-items: center; justify-content: space-between">
                        <div >
                           <input type="checkbox" onclick="updateStatus(this)" id="${toDo.id}" ${completed}>
                           <b class="${completed}" >${toDo.toDo}</b>
                        </div>
                        <div>
                            <div class="dropdown">
                              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button onclick="deleteTask(${toDo.id})" >Sil</button></li>
                                
                              </ul>
                            </div>
                        </div>
                  </div>


            `
        if (toDo.completed == true){

        }
        toDoCard.insertAdjacentHTML("beforeend", Todos);
    }

    toDoCard.innerHTML = Todos;

}


function updateStatus(selectedTask){


    let label = selectedTask.nextElementSibling;
    let parent = selectedTask.parentElement.parentElement;
    if (selectedTask.checked){
        label.classList.add("checked");
        parent.classList.add("border-success");
        parent.classList.remove("border-danger");
    }
    else {
        label.classList.remove("checked");
        parent.classList.add("border-danger");
        parent.classList.remove("border-success");

    }
}

function onClickButton() {

    if (toDoInput.value !== "") {
        gorevListesi.push({"id": gorevListesi.length, "toDo": toDoInput.value, "completed": false})
        displayToDo();
    }

    toDoInput.value = "";

}