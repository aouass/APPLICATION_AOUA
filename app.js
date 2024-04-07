// localStorage.clear();
// let nbre = [];


// let taskList = document.getElementById('TaskList');
// if (localStorage.getItem('stockage')!=null) {
//     nbre=JSON.parse(localStorage.getItem('stockage'));
// }

// (function(){
//     for (let i = 0; i < nbre.length; i++) {
//         let li = document.createElement('li');
//         li.innerHTML = nbre[i];
//         let deleteButton = document.createElement('button');
//         deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>'
//         deleteButton.onclick= function(){
//             deleteTask(li);
//         }
    
        
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
//     }
//     // alert(nbre);

// })();

// // // Fonction pour ajouter une tâche à la liste
// function addTask(){
//     let taskInput = document.getElementById('TaskInput');
//     let taskText = taskInput.value;
//     nbre.push(taskText);
//     localStorage.setItem('stockage',JSON.stringify(nbre));
//     alert(nbre);
   

//     if(taskText===""){
//         return;
//     }


//     let li = document.createElement('li');
//     li.innerHTML = taskText;


//     let deleteButton = document.createElement('button');
//     deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>'
//     deleteButton.onclick= function(){
//         deleteTask(li);
//     }

    
//     li.appendChild(deleteButton);

//     taskList.appendChild(li);

//     taskInput.value='';
// }




// function deleteTask(task){
//     taskList.removeChild(task);

// }












let tasks = [];

let taskList = document.getElementById('TaskList');
if (localStorage.getItem('stockage') != null) {
    tasks = JSON.parse(localStorage.getItem('stockage'));
}

(function() {
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        let task = tasks[i];
        li.innerHTML = `
            <span>${task.text}</span>
            <span>${task.dueDate}</span>
            <span>${task.priority}</span>
            <span>${task.status}</span>
        `;
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>'
        deleteButton.onclick = function() {
            deleteTask(li);
        }

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
})();

// Fonction pour ajouter une tâche à la liste
function addTask() {
    let taskInput = document.getElementById('TaskInput');
    let taskText = taskInput.value;
    let dueDate = document.getElementById('deadlineInput').value;
    let Priority = document.getElementById('priority');
    let priority=Priority.value;
    let Status = document.getElementById('status');
    let status=Status.value;

    let task = {
        text: taskText,
        dueDate: dueDate,
        priority: priority,
        status: status
    };

    tasks.push(task);
    localStorage.setItem('stockage', JSON.stringify(tasks));

    if (taskText === "") {
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <span>${dueDate}</span>
        <span>${priority}</span>
        <span>${status}</span>
    `;

    // Ajout d'une case à cocher pour marquer les tâches comme complétées
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        elementCompleted(li, checkbox.checked);
    };
    li.prepend(checkbox);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>'
    deleteButton.onclick = function() {
        deleteTask(li);
    }

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
}

//  Fonction pour marquer les tâches comme complétées
function elementCompleted(task, checked) {
    if (checked) {
        task.classList.add('completed');
    } else {
        task.classList.remove('completed');
    }
}

// Lorsque l'utilisateur supprime une tâche en cliquant sur le bouton de suppression, cette fonction est appelée. Elle prend en paramètre l'élément <li> de la tâche à supprimer et le supprime de la liste en appelant la méthode removeChild() sur l'élément parent de la liste
function deleteTask(task) {
    taskList.removeChild(task);
}




