// localStorage.clear()

// SELECTEURS
const todoInput= document.querySelector(".todo-input");
const deadlineInput = document.querySelector(".deadlineInput"); // Ajout de la sélection pour la date d'échéance
const priorityInput = document.querySelector(".priority"); // Ajout de la sélection pour la priorité
const statusInput = document.querySelector(".Status"); // Ajout de la sélection pour le statut
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");

// ECOUTEURS
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// FONCTIONS
function addTodo(event){
    event.preventDefault();
    // todo DIV
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    // créer li
    const newtodo=document.createElement("li");
    newtodo.innerText=todoInput.value;

    // Ajout des attributs supplémentaires
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;
    const status = statusInput.value;
    if (deadline !== "") {
        newtodo.innerText += `  ${deadline}`;
    }
    if (priority !== "") {
        newtodo.innerText += `    ${priority}`;
    }
    if (status !== "") {
        newtodo.innerText += `    ${status}`;
    }

    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);

    // boutton check
    const completeButton=document.createElement("button");
    completeButton.innerHTML='<ion-icon name="checkbox-outline" class="check" title=""></ion-icon>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // ajouter la todo au localstorage
    SaveLocalTodo(todoInput.value);

    // boutton trash
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<ion-icon name="trash-outline"  class="trash" title=""></ion-icon>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // ajouter todo à todo-list
    todoList.appendChild(todoDiv);
    todoInput.value="";
    deadlineInput.value=""; // Réinitialiser la date d'échéance
    priorityInput.value=""; // Réinitialiser la priorité
    statusInput.value=""; // Réinitialiser le statut
}

function deleteCheck(e){
    // delete todo
    const item= e.target;
    if(item.classList[0]==='trash-btn'){
        const todo= item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    // delete check
    if(item.classList[0]==='complete-btn'){
        const todo= item.parentElement;
        todo.classList.toggle("completed");
    }
}

// fonction pour stocker 
function SaveLocalTodo(todo){
    // checker si il y'a des items exsistants
    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];
    } else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

// function pour afficher mes éléments sur ma page html
function getTodos(){
    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];
    } else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){

        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
    
        // créer li
        const newtodo=document.createElement("li");
        newtodo.innerText=todo;
    
        // Ajout des attributs supplémentaires
        const deadline = deadlineInput.value;
        const priority = priorityInput.value;
        const status = statusInput.value;
        if (deadline !== "") {
            newtodo.innerText += `  ${deadline}`;
        }
        if (priority !== "") {
            newtodo.innerText += ` ${priority}     `;
        }
        if (status !== "") {
            newtodo.innerText += `            ${status}`;
        }
    
        newtodo.classList.add("todo-item");
        todoDiv.appendChild(newtodo);
    
        // boutton check
        const completeButton=document.createElement("button");
        completeButton.innerHTML='<ion-icon name="checkbox-outline" class="check" title=""></ion-icon>';
        completeButton.classList.add("complete-btn");
        todoDiv.appendChild(completeButton);
    
        // boutton trash
        const trashButton=document.createElement("button");
        trashButton.innerHTML='<ion-icon name="trash-outline"  class="trash" title=""></ion-icon>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    
        // ajouter todo à todo-list
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];
    } else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}