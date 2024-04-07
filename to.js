// SELECTEURS
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const filterOption=document.querySelector(".priority");
// ECOUTEURS

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("input",filterTodo)

// FONCTIONS

function addTodo(event){
   event.preventDefault();
   const todoDiv=document.createElement("div");
   todoDiv.classList.add("todo");
//    créer li
   const newtodo=document.createElement("li");
   newtodo.innerText=todoInput.value;
   newtodo.classList.add("todo-item");
   todoDiv.appendChild(newtodo);
//    boutton check
   const completeButton=document.createElement("button");
   completeButton.innerHTML='<ion-icon name="checkbox-outline" class="check" title=""></ion-icon>';
   completeButton.classList.add("complete-btn");
   todoDiv.appendChild(completeButton);
//    boutton trash
   const trashButton=document.createElement("button");
   trashButton.innerHTML='<ion-icon name="trash-outline"  class="trash" title=""></ion-icon>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
// ajouter todo à toto-list
   todoList.appendChild(todoDiv);
   todoInput.value="";

}

function deleteCheck(e){
    // console.log(e.target);
    // delete todo
    const item= e.target;
    if(item.classList[0]==='trash-btn'){
        const todo= item.parentElement;
        todo.remove();
    }
    // delete check
    if(item.classList[0]==='complete-btn'){
        const todo= item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo)){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display="flex";
                } else {
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")){
                    todo.style.display="flex";
                } else {
                    todo.style.display="none";
                }
                break;

        }
    }
}