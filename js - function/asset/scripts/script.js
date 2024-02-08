// // Définition des nombres pour lesquels nous voulons trouver le PGCD
// let a = 60;
// let b = 48;

// // Algorithme pour calculer le PGCD
// while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
// }

// // Le PGCD est maintenant stocké dans 'a'
// console.log("Le PGCD est :", a);

// // exercice 1

// function saisirUnNombre(){
//     // ici je déclare ma variable entier sans l'instancier (donc elle va être null)
// let entier;

// while(isNaN(entier)){
//     //on saisit
// entier = prompt("saisir un nombre");

// if (isNaN(entier)){
//     alert("ce n'est pas un nombre");

// }
// }
// //je suis sortis de ma boucle et je renvoi entier grace au return

// return parseInt(entier);
// }

// let a= saisirUnNombre();
// let b= saisirUnNombre();

// alert("a" + a);
// alert ("b" + b);

// exercice test

// let prenom = prompt("saisir un prenom");
// let name2 = prompt("saisir un nom");
// let old = saisirUnNombre(); // je lui donne comme valeur le nom de la fonction
// let years = trouverAnnee(old);

// function trouverAnnee(){
// let annee = prompt("saisir ton age");
// if(annee<= 2024 && old >= 0){
//   annee = 2024 - old;

// }  return parseInt(annee);
// }

// function saisirUnNombre(){
//   // ici je déclare ma variable entier sans l'instancier (donc elle va être null)
//   let entier;

//   while (isNaN(entier)) {
//     //on saisit
//     entier = prompt("saisir un nombre");

//     if (isNaN(entier)) {
//       alert("ce n'est pas un nombre");
//     }
//   }
//   return entier;   // je le retourne car il est pas defini dans la fonction saisirUnNombre
// }
// function affichage(a, b, c,d) {
//   alert("je m'appelle " + a + " " + b + " et j'ai " + c + "mon année de naissance est "+ d);
// }
// affichage(prenom, name2, old, years);

// function saisirNombre() {
//   return parseInt(prompt("Veuillez saisir votre année de naissance :"));
// }

// let age1 =calculAge(saisirNombre()); // je calcul mon age en faisant date d'aujourd'hui 

// function calculAge(cheval) {   // parametre local sans incidence sur le résultat
//   let d = new Date();
//   return d.getFullYear() - cheval; // j'ai mis cheval ici pour voir 
// }
// alert("cette personne a " + age1 ); // ici j'affiche mon age1 qui a comme valeur le nom de ma function

