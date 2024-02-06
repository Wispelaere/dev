// exercice 2.2

// let number = prompt("donnez un nomber svp");

// if(number){
//     let carree = number * number;
//     alert("le montant est de " + carree)
// }

// exercice 2.3

// let priceHT = prompt("donnez un montant HT");
// let tva = prompt("donnez le montant de la tva svp");
// let numberArticle = prompt("donnez un nombres d'articles svp");
// let total = 0;

// let ttc = (priceHT * (1 + tva/100));

// total = (ttc * numberArticle);

// alert("le montant ttc est de " + total);
// alert("montant = " + priceHT)

// exercice 3.1

// let number = prompt("veuillez rentrer un nombre");

// if (number > 0){
// alert("ce nombres est positif");
// }

// else{
//     alert("ce nombres est négatif");
//     }

// exercice 3.2

// let number = parseFloat(prompt("veuillez rentrer un nombres"));
// let number2 = parseFloat(prompt("veuillez rentrer un deuxieme nombres"));
// let sommes = (number + number2);

// if ((number < 0 && number2 < 0) || (number > 0 && number2 > 0)){
//   let sommes = number + number2;
//   alert("le résultat est positif");
// }
// else{
//     let sommes = number + number2;
//     alert("le résultat est négatif");
//   }

//   alert("la sommes des nombres est de" + sommes);

// exercices 3.3

// let number = prompt("veuillez rentrer un nombre");

// if(number > 0){
// alert("ce nombres est positif");
// }

// else if(number == 0){
//     alert("ce nombres est neutre");
//     }

// else{
//     alert("ce nombres est négatif");
// }

// exercices 3.4

// let name1 = prompt("donner un nom");
// let name2 = prompt("donner un deuxiemes nom");
// let name3 = prompt("donner un troisiemes nom");

// if (name1<name2 && name2<name3){
//     alert("c'est dans l'ordre alphabétique");
// }

// else{
//     alert("c'est pas dans l'ordre alphabétique");
// }

// exercice 3.6

// let old = prompt("quelle ages avez vous ?");

// if(old >= 6 && old <= 7){
//     alert("il est poussin");
// }if(old >= 8 && old <= 9){
//     alert("il est pupille");
// }
// if(old >= 10 && old <= 11){
//     alert("il est minime");
// }

// if(old >= 12){
//     alert("il est cadet");
// }

// exercice 4.2

// let heure = parseInt(prompt("donnez une heure"));
// let minute = parseInt(prompt("donnez les minutes")) +1;

// if (minute == 60) {
//   minute = 0;
//   heure = heure + 1;
//   if (heure == 24) {
//     heure = 0;
//   }
// }

// alert("il sera " + heure + "H" + minute + "m");

// exercice 4.3

// let heure = parseInt(prompt("donnez une heure"));
// let minute = parseInt(prompt("donnez les minutes")) ;
// let seconde = parseInt(prompt("donnez les secondes")) ;

// seconde = seconde + 1;

// if (seconde == 60){
//     seconde = 0;
//     minute = minute + 1;
// }

// if (minute == 60){
//   minute = 0;
//   heure = heure + 1;
//   if (heure == 24){
//     heure = 0;
//   }
// }

// alert("il sera " + heure + "H" + minute + "m" + seconde + "s");

// exercice 4.4

// let number = prompt("Combien voulez vous de photocopie");
// let sum = 0;

// if (number <= 10){
//     sum = number * 0.10;
// }
// if (number > 10 && number <= 30){
//     sum = (
//         10 * 0.10) + ((number -10) * 0.09);
// }
// if (number > 30){
//     sum = ((number-30) * 0.08);
// }

// alert("cela coutera " + sum);

// exercice 4.5

// let age = prompt("quelle ages avez vous ?");
// let sexe = confirm("etes vous un hommes");

// if(sexe  && age > 20){
//     alert("il paie des impots");

// }
// else if (!sexe  && (age > 18 && age < 35)){
// alert("elle paie des impots et des passe droit");
// }

// else{
//    alert("tu ne paie pas d'impot mais oublie pas de verser les sous a papa");
// }

// exercice 4.7

// let old = prompt("quelle âges-avez vous ?");
// let permit = prompt("Depuis combien de temps avez vous votre permis ?");
// let responsibleAccident = prompt("Avez-vous deja eu un ou plusieurs accident résponsables?");
// let fidelity = prompt("Depuis combien de temp êtes-vous chez nous ?")
// let count = 0;
// let blues = 4;
// let green = 3;
// let orange = 2;
// let red = 1;

// if ((responsibleAccident >= 3) || (old < 25 && permit < 2 && responsibleAccident == 0)){
//     alert("vous êtes refusé");
// }

// else {

// if (responsibleAccident < 1){
//     count += 1;
// }

// if (old > 25){
//     count += 1;
// }

// if (permit > 2){
//     count += 1;
// }

// if(fidelity > 1){
//     count += 1;
// }

// if(count == 1){
// alert("vous êtes assuré couleur red");
// }
// if(count == 2){
// alert("vous êtes assuré couleur orange");
// }
// if(count == 3){
// alert("vous êtes assuré couleur vert");
// }
// if(count == 4){
//  alert("vous êtes assuré couleur bleues");
//  }

// }

// exercice 5.1

// let i = prompt("Donnez un nombres entre 1 et 3 !");

// while(i < 1 || i > 3){
// i = prompt("Donnez un nombre entre 1 et 3");

// }
// alert("vous avez choissis " + i);

// exercice 5.2

// let i = prompt("Donnez un nombres entre 10 et 20 !");

// while (i < 10 || i > 20) {
//   if (i < 10) {
//     alert("Plus grand!");
//     i = prompt("Donnez un nombre entre 10 et 20");
//   }

//   if (i > 20) {
//     alert("plus petit!");
//     i = prompt("Donnez un nombre entre 10 et 20");
//   }
// }

// exercice 5.3

// let i = parseInt(prompt("Donnez un nombres!"));
// /* je creer une variable j pour faire le calcul avec le i*/

// for(let j=i+1; j<=i+10 ; j++){
//     alert(j)
// }

// exercice 5.4

// let number = (prompt("Donnez un nombres!"));

// document.write("<h3> table de " + number+ "<h3>");

// for(let i = 1 ; i<=10 ; i++){

//     document.write(number + "x" + i + "=" + number * i+ 5
//      "<br>");
// }

// exercice 5.5

// let number = parseInt(prompt("Donnez un nombres!"));
// let sum = 0;

// for(let i = 1   ; i <= number; i++ ){
//     sum = sum + i;
//     console.log(sum);
// }
// alert(sum);

// exercice 5.6

// let number = parseInt(prompt("Donnez un nombres!"));
// let multiplication = 1;

// for(let i = 1   ; i <= number; i++ ){
//     multiplication= parseInt(multiplication * i);
//     console.log(multiplication);
// }
// alert(multiplication);

// exercice 5.7
// let number;
// let numberMax = 0;
// let position = 0;

// for (let i = 1; i < 11; i++) {
//   number = parseInt(prompt("Veuillez saisir un nombre svp !"));
//   if (number > numberMax) {
//     numberMax = number;
//     position = i;

//   }
// }
// alert(numberMax);
// alert(position)

// exercice 5.8

// let number = 1;
// let numberMax = 0;
// let position = 0;
// let place = 0;
// while (number != 0) {
//   number = parseInt(prompt("Veuillez saisir un nombre svp !"));

//   position = position + 1;
//   if (number > numberMax) {
//     numberMax = number;
//     place = position;
//   }
// }
// alert(numberMax);
// alert(place);

exercice 5.9



