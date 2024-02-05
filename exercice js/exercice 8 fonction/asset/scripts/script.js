// exo 2

// let nombre1 = prompt("nombre");
// let nombre2 = prompt("nombre");

//  function multiplication(x,y) {
//     return x*y;

//  }
//  function cube(x) {
//     return Math.pow(x,3);

//  }
// document.write("la mulitiplication de " + nombre1 + " et " + nombre2 + " est " + multiplication(nombre1,nombre2));
// document.write("<br>");
// document.write(" le cube de "+ nombre1+" et" + cube(nombre1));
// document.write("<br>");

// //  Créer un nouvel objet Image
//   var imgElement = new Image();

//   // Définir l'attribut src avec l'URL passée en paramètre
//   imgElement.src = "papillon.jpg";

//   // Ajouter l'élément img à la page (par exemple, au corps du document)
//   document.body.appendChild(imgElement);

// exo 3

// let nombre =prompt("saisir un nombre");

// function multiplication(x) {

//     for (let i = 1; i <=10; i++) {
//     alert(i*x);

//     }

// }
// multiplication(nombre);

// exo4

// let phrase = prompt("saisir phrase");
// let lettre = prompt("saisir la lettre");
// let resultat =calcule(phrase,lettre)
// function calcule (a,b) {
//     let nombreLettre = 0

//     for (let i = 0; i< a.length; i++) {

//       if (b==a[i]){
//         nombreLettre++;
//       }
//     }
//     return nombreLettre;
// }
// document.write(resultat)

// exo5
let choix = prompt(
  "1.Multiples \n" +
    "2. Sommes et moyenne \n" +
    "3 .Recherche du nombre de voyelles \n" +
    "4. Recherche du nombre des caracteres suivants \n"
);

switch (choix) {
  case "1":
    multiple();
    break;
  case "2":
    somme();
    break;
  case "3":
    voyelle();
    break;
  case "4":
    lettre();
    break;

  default:
    alert("erreur");
    break;
}
// fonctions dans ubn fonction et renomé par exemple multiple pour que le case "1" multiple()
function multiple() {
  let nombre = prompt("saisir un nombre");

  function multiplication(x) {
    for (let i = 1; i <= 10; i++) {
      alert(i * x);
    }
  }
  multiplication(nombre);
}

function somme() {
  let note = parseInt(prompt("entrer notes"));
  let i = 0;
  let somme = 0;
  let mini = note;
  let maxi = note;

  while (note != 0) {
    if (note < mini) {
      mini = note;
    }
    i++;
    somme = somme + note;
    note = parseInt(prompt("entrer notes"));

    if (note > maxi) {
      maxi = note;
    }
  }
  alert("la somme est egale a " + parseInt(somme));
  alert("la moyenne est egale a " + parseFloat(somme / i));
  alert("la note mini est " + mini);
  alert("la note maxi est " + maxi);
}

function voyelle() {
  // Demander à l'utilisateur de saisir un mot
  let mot = prompt("Veuillez saisir un mot :");

  // Initialiser le compteur de voyelles à 0
  let nombreVoyelles = 0;

  // Parcourir chaque caractère du mot
  for (let i = 0; i < mot.length; i++) {
    // Extraire le caractère courant
    var caractereCourant = mot.substr(i, 1);

    // Vérifier si le caractère est une voyelle (en minuscule)
    if ("aeiou".indexOf(caractereCourant.toLowerCase()) !== -1) {
      // Incrémenter le compteur de voyelles
      nombreVoyelles++;
    }
  }

  // Afficher le nombre de voyelles dans le mot
  console.log(
    "Le mot '" + mot + "' contient " + nombreVoyelles + " voyelle(s)."
  );
}

function lettre() {
  let phrase = prompt("saisir phrase");
  let lettre = prompt("saisir la lettre");
  let resultat = calcule(phrase, lettre);
  function calcule(a, b) {
    let nombreLettre = 0;

    for (let i = 0; i < a.length; i++) {
      if (b == a[i]) {
        nombreLettre++;
      }
    }
    return nombreLettre;
  }
  document.write(resultat);
}
