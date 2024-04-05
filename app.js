// localStorage.clear();
let nbre = [];


let taskList = document.getElementById('TaskList');
if (localStorage.getItem('stockage')!=null) {
    nbre=JSON.parse(localStorage.getItem('stockage'));
}


// localStorage.setItem('name1','autre nom');

// localStorage.setItem('NBR',JSON.stringify(nbre));
// var test = JSON.parse(localStorage.getItem("NBR"));

// alert(localStorage.getItem("NBR"));
// alert("name = "+ localStorage.getItem('name'));
// alert("name1 = "+ localStorage.getItem('name1'));    
// let taskInput = document.getElementById('TaskInput');
// alert(taskInput);
// let taskText = taskInput.value;
// pour recuperer mes elements stocker
(function(){
    for (let i = 0; i < nbre.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = nbre[i];
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>'
        deleteButton.onclick= function(){
            deleteTask(li);
        }
    
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
    // alert(nbre);

})();

// // Fonction pour ajouter une tâche à la liste
function addTask(){
    let taskInput = document.getElementById('TaskInput');
    let taskText = taskInput.value;
    nbre.push(taskText);
    localStorage.setItem('stockage',JSON.stringify(nbre));
    alert(nbre);


    if(taskText===""){
        return;
    }


    let li = document.createElement('li');
    li.innerHTML = taskText;


    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>'
    deleteButton.onclick= function(){
        deleteTask(li);
    }

    
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value='';
}




function deleteTask(task){
    taskList.removeChild(task);

}



