// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay
let buttonModal = document.querySelector(".modal-btn");
let modalOverlay = document.querySelector(".modal-overlay"); // ici je selectionne mais bouton avec un queryselector quand c'est une classe plus facile 
let closeBtn = document.querySelector(".close-btn");

buttonModal.addEventListener("click",function(){
    modalOverlay.classList.add("open-modal"); //je lui demande d'ajouter la classeList open modal pour modalOverlay donc j'utilise .classList.add
})

closeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal") // j'utilise .classList.remove pour supprimer 
})