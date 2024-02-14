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

// exercice 5.9

// let price = 1;
// let sum=0;
// let returned =0;
// let paperMoney_05 = 0;
// let paperMoney_10 = 0;
// let coin = 0;

// while(price != 0){
//     price = parseInt(prompt("Veuillez saisir les prix des achats !"));
//     sum = price + sum;
// }
// alert("montant total a payer est de " + sum);


// let amountPaid= parseInt(prompt("entrez le montant payé par le client"));

// let change= amountPaid - sum;
// alert(change);


// if(amountPaid==sum){
//     alert("merci au revoir");
// }
//  else{

// while (change >= 10) { // Tant que la monnaie est supérieur à 10
//   paperMoney_10 = paperMoney_10 + 1; // Je retire 10 et j'ajoute +1 a ma valeur billetde10
//   change = change - 10;
// }

// while (change >= 5) {
//   change = change - 5;// Je retire 5 et j'ajoute +1 à ma valeur billetde5
//   paperMoney_05 = paperMoney_05 + 1;
// }

// while (change >= 1) {
//   change = change - 1; // Je retire 1 et j'ajoute 1 a ma valeur piecedeun
//   coin = coin +1;
// }

// alert(
//   "il va rendre " +
//     paperMoney_10 +
//     " en billet de 10 " +
//     paperMoney_05 +
//     " en billet de 5 " +
//     coin +
//     " en pieces"
// );
// }



// exercice 6.1

// let myArray = Array(15); //je lui donne une taille de 15

// for(let i = 0; i<myArray.length;i++){ // ici je lui dit tu commence a i=0 donc premiere place dans le tableau et tu arrete a 15 qui est la taille de mon tableau
//     myArray[i]=0; // ici tu lui dit que ta variable i = 0 dans le tableau met tu aurait pus mettre par exemple u nnombre donnez par une variable nombre
// }
// console.log(myArray);

// exerice 6.3

// let myArray = Array(9);

// for(let i = 0; i<myArray.length;i++){
//     let number = prompt("donnez des chiffres")
//     myArray[i]=number;
// }
// alert(myArray);

// exercice 6.7


// let myArray = Array(9);
// let sum =0 ;

// for(let i = 0; i<myArray.length;i++){
//     let number = parseInt(prompt("donnez des chiffres"));
//     sum = sum + number;
//     myArray[i]=number;
    
// }
// let average = sum / myArray.length // variable moyenne en anglais // je dvise ma sum de mes mes nombre additionner avant par la longueur du tableau avec un .lenght
// alert(myArray);
// alert("la moyenne est de : " + average)

// exercice 6.8

// let myArray = [];
// let positiv =0;
// let negativ = 0;

// let numberValue = parseInt(prompt("Entre le nombres de valeur pour le tableau"));            // je lui demande combien de valeur dans le tableau

// for(i=0 ; i<numberValue; i++){
//   let value =  parseInt(prompt("donnez une valeurs")); 
//     myArray.push(value);                                     // ici je pousse les valeurs dans le tableau 

// console.log(myArray);

// if(value<0){
//     negativ = negativ+1;              // j'ai mis un compteur de valeur +1 a chaque valu négative en dessou de 0 par exemple
// }
// if(value>0){
//     positiv = positiv+1;
// }}
// console.log("il y aura en négatives : " + negativ);
// console.log("il y aura en positives : " + positiv);

// exercice 6.9

// let sum =0 ;


// let numberValue = parseInt(prompt("Combien de valeurs ?")); 
// let myArray =Array(numberValue);      //en gros , le tableau prendra la taille que j'ai deefini par le nombres de valeurs rentré
// for(let i = 0; i<numberValue;i++){
//  myArray[i]=parseInt(prompt("Donnez un nombre")); // donc la tableau et ma valeur [i] , elle est defini a chaque boucle

//    sum += myArray[i]; //chaque tour , ta somme prend la valeur dans le tableau
// }
// console.log("la somme des nombres dans le tableau est " + sum);

// exercice 6.10

// let myArray1 = [4,8,7,9,1,5,4,6];
// let myArray2 = [7,6,5,2,1,3,7,4];
// let myArray3 = [];

// for(i=0;i<myArray1.length;i++){
//   let sum=  myArray1[i] + myArray2[i];    // je lui dit fait l'adition des valeur dans myArray1 et myArray2 et met sa dans une valeur sim 
// myArray3.push(sum);   // ensuite tu pousse la valeur sum donc les chiffre adittioné des 2 tableau dans le tableau 3
// }
// console.log("le tableau sera  " +  myArray3 );

// exercice 6.11

// let myArray1 = [4, 8, 7, 12];       // solution 1 difficile
// let myArray2 = [3, 6];
// let sum = 0;

// for (let i = 0; i < myArray1.length; i++) {
//     sum += myArray2[0] * myArray1[i];
// }

// for (let i = 0; i < myArray1.length; i++) {
//     sum += myArray2[1] * myArray1[i];
// }

// console.log(sum);


// let myArray1 = [4, 8, 7, 12];   // je donne un tableau
// let myArray2 = [3, 6];
// let sum = 0;

// for (let i = 0; i < myArray1.length; i++) {    // ici je lui dit prend tableau 1
//     for (let j = 0; j < myArray2.length; j++) {    // ici prend tableau 2
//     sum += myArray2[j] * myArray1[i];    // je fait une boucle pour mutilpier mes deux premiere valeur dans chaque valeur et je les adddtionne
// }
// }



// console.log(sum);

// exercice 6.12

// let myArray = [];



// let numberValue = parseInt(prompt("Entre le nombres de valeur pour le tableau"));            // je lui demande combien de valeur dans le tableau

// for(i=0 ; i<numberValue; i++){
//   let value =  parseInt(prompt("donnez une valeurs")); 
//     myArray.push(value+1);    
  
// }


// console.log(myArray);

// exercice 6.12

let myArray = [];
let position = 0;




let numberValue = parseInt(prompt("Entre le nombres de valeur pour le tableau"));            // je lui demande combien de valeur dans le tableau

for(i=0 ; i<numberValue; i++){
  let value =  parseInt(prompt("donnez une valeurs")); 
    myArray.push(value);    
  
    if(value>0){
     position+1;
    }
}


console.log(myArray);
console.log(position);
