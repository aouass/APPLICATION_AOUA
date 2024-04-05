



// // assure que le code à l'intérieur ne s'exécute que lorsque le DOM est prêt à être manipulé.
// $(document).ready(function() {

//     // let stokage = JSON.parse(localStorage.getItem('TaskList')) || [];
//     // sélectionne l'élément avec l'ID taskList et le stocke dans la variable taskList
//     let taskList = $('#TaskList');

//     // attache un gestionnaire d'événements au clic sur le bouton avec l'ID addTask, appelant la fonction addTask
//     $('#addTask').click(addTask);

//     // attache un gestionnaire d'événements au clic sur un élément avec la classe .delete qui se trouve à l'intérieur de taskList. Cela est nécessaire car les boutons de suppression sont ajoutés dynamiquement
//     taskList.on('click', '.delete', function() {
//         deleteTask($(this).closest('li'));
//     });
// });

// function addTask(){
    
//     // Récupère le texte de l'input et le stocke dans la valeur taskText
//     let taskInput = $('#TaskInput');
//     let taskText = taskInput.val();

//     // Vérifie si le texte est vide 
//     if(taskText === ""){
//         return;
//     }


//     // let taskAttributes = {
//     //     text: taskText,
//     //     deadline: $('#deadlineInput').val(), // Récupérer la date d'échéance
//     //     priority: $('#priority').val(), // Récupérer la priorité
//     //     status: $('#status').val() // Récupérer le statut
//     // };

//     // let lip = $('<li></li>').text(taskAttributes.text);

//     // // Ajouter les attributs supplémentaires à la tâche
//     // if (taskAttributes.deadline !== "") {
//     //     li.append($('<span></span>').text(' | Deadline: ' + taskAttributes.deadline));
//     // }
//     // if (taskAttributes.priority !== "") {
//     //     li.append($('<span></span>').text(' | Priority: ' + taskAttributes.priority));
//     // }
//     // if (taskAttributes.status !== "") {
//     //     li.append($('<span></span>').text(' | Status: ' + taskAttributes.status));
//     // }


//     // Crée un nouvel élément  contenant le texte de la tâche
//     let li = $('<li></li>').text(taskText);

//     // Crée un bouton de suppression avec une icône et lui attache un gestionnaire d'événements pour supprimer la tâche associée.

//     let deleteButton = $('<button><ion-icon name="trash-outline" class="delete"></ion-icon></button>');
//     deleteButton.on('click', function() {
//         deleteTask(li);
//     });

//     // Ajoute le bouton à l'élément <li>
//     li.append(deleteButton);

//     // Ajoute l'élément <li> à la liste des tâches
//     $('#TaskList').append(li);
//     // localStorage.setItem('TaskList', JSON.stringify(stokage));



//     // Vide le champ de texte de la tâche.
//     taskInput.val('');
    
//     // taskInput.val('');
//     // $('#deadlineInput').val(''); // Réinitialiser la date d'échéance
//     // $('#priority').val(''); // Réinitialiser la priorité
//     // $('#statusInput').val(''); // Réinitialiser le statut
// }
// // Prend un paramètre task qui est l'élément <li> à supprimer et Utilise la méthode remove() pour supprimer l'élément <li> de la liste des tâches
// function deleteTask(task){
//     task.remove();
// }