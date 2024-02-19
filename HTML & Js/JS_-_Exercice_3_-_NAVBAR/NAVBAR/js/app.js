// Récupérer le sélecteur .nav-toggle ainsi que .links 

// Ecouter l'évènement 'click' sur .nav-toogle

  // si .links a pour class .show-links
    // la supprimer
  // sinon
    // l'ajouter

  // Vous pouvez arriver au même résultat avec classList.toggle

  let navToggle = document.querySelector(".nav-toggle");
  let links = document.querySelector(".links");

  navToggle.addEventListener("click", function(){
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links"); // Si la classe est présente, la supprimer
    } else {
        links.classList.add("show-links"); // Sinon, l'ajouter
    }
});