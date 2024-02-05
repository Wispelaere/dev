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

