// Récupérer le sélecteur .about, tous les sélecteurs .tab-btn et .content
// Ecouter l'évènement 'click' sur .about

// Récupérer la valeur de l'id de l'élément courant avec e.target.dataset.id
// voir tuto https://codepen.io/dizakids/pen/WNNVLEz

// si id

// supprimer .active sur les autres boutons

// le btn courant devient .active

// supprimer .active sur les autres contenus

// récupérer le contenu courant grâce à l'id

// ajouter .active au contenu courant

let tabBtn=document.querySelectorAll(".tab-btn");   // Tous les sélecteurs .tab-btn
let contents=document.querySelectorAll(".content");  // Tous les selecteurs .content
let about=document.querySelector(".about");   // Récupérer le sélecteur .about
about.addEventListener("click",function(e) // fonction about (événement) au click il effectue la fonction
{
let id =e.target.dataset.id;        // les data id sur lesquels on clique
if (id){
  tabBtn.forEach(function(btn) {          // si on clique si un élément ca desactive les autres 
    btn.classList.remove('active'); // on enlève l'activitation sur tous les boutons
});
e.target.classList.add('active'); // on activite la classe quand on clique dessus

contents.forEach(function(content) { // pour chaque elements " contents "
  content.classList.remove('active');  //on enlève l'activitation sur tous les contents
});
document.getElementById(id).classList.add('active'); // on rajoute l'activation sur la classe 
//de l'id sur lequel on clique
}
});