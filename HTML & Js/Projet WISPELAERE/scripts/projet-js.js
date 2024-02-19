// projet JS 2020 - codez

// function getNumber(chaine) {
//     // Crée un nouvel objet String à partir de la chaîne d'entrée
//     let str = new String(chaine);

//     // Trouve l'index de la première occurrence de "-"
//     let index = str.indexOf("-");

//     // Extrait la sous-chaîne depuis le début de la chaîne jusqu'au trait d'union
//     let nbre = str.substring(0, index);

//     // Retourne le nombre extrait
//     return nbre;
// }

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner tous les éléments avec la classe "comment"
  let comments = document.querySelectorAll(".comment");

  // pour tout les elements
  comments.forEach(function surligner(comment) {
    //j'ajoute un action de survoler avec la souris
    comment.addEventListener("mouseover", function () {
      // pour changer ka couleur en jaune 
      comment.style.backgroundColor = "yellow";
    });

    // Ajouter un écouteur d'événements pour l'événement mouseout
    comment.addEventListener("mouseout", function () {
      // Annuler le surlignage de l'annotation lorsque la souris quitte l'élément
      comment.style.backgroundColor = "";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {       
  let masquer = document.getElementById("toggle");

  masquer.addEventListener("click", function () {
    let comments = document.querySelectorAll(".comment");

    comments.forEach(function (comment) {
      if (comment.style.display !== "none") {   //aidez par chat GPT pour la partie la
        comment.style.display = "none";
      } else {
        comment.style.display = "";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le bouton par son ID
    let espacer = document.querySelector("#addouterspace");
    // Ajoutez un écouteur d'événements pour le clic sur le bouton "espacer"
    espacer.addEventListener("click", function () {
      // selectionne tout les éléments 'p'et stocke ds 1 variable elementsP
      const elementsP = document.querySelectorAll("p");
      //Cette ligne parcourt tous les éléments <p> sélectionnés précédemment à l'aide de la méthode forEach
      elementsP.forEach(function (element) {
        // /prend chaque élément <p>, récupère sa marge actuelle à l'aide de element.style.margin, 
        //   la convertit en nombre entier avec parseInt, ou utilise 0 si la marge n'est pas définie, 
        //   puis ajoute 5 pixels à cette valeur./
        element.style.margin = parseInt(element.style.margin || 0) + 5 + "px";
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
   
    let aerer = document.getElementById("addinnerspace");

   
    aerer.addEventListener('click', function () {
        let para = document.querySelectorAll('p')
 
        para.forEach(function(element) {
        
            element.style.padding =  parseInt(element.style.padding || 0) + 5 + 'px';
    });
});
});

