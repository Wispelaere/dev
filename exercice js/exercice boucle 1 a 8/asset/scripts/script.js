// exercice1

/*let i = prompt("Veuillez saisir votre prénom! (première demande)")


 une boucle tant que n'est pas vide
while (i!=""){

    i = prompt("Veuillez saisir votre prénom!")
}
alert("je suis sorti de la boucle");*/

// exercice 1.5

// //si je veut mettre une nombre definie de limite //
// alert ("vous allez saisir 10 noms")
// // la je lui dit que d'afficher le premier prenom//
// let i=1;
// //boucle de lui demander plusieur prenom mais il sortira de la boucle au 10eme//
// while (i<=10){
// // il va me demander 10 fois le prenom de suite //
//     let nom = prompt("Veuillez saisir votre prénom!")
//     alert(nom);
//     // il est incrementer ++ veut dire prenom + 1 ( dans la boucle)
//     i++;
// }
// alert("je suis sorti de la boucle");

// exercice 2

// let n = prompt("Donner un nombre");
// let entier = 0
// let msg=""

// while (entier < n){

//     alert(entier=entier + 1)
// }
// alert(entier);

// exercice 3

// let n = parseInt(prompt("Donner un nombre"));
// let entier = 0;
// let somme = 0;

// for (i=n-1;i>=0;i--){
//     // i = i - 1//
//     somme=somme+i;
//     console.log("somme à chaque tour: " + somme)
// }

// alert(somme);

// exercice  4 

// let n1 = parseInt(prompt("donner un nombre")); //3//
// let n2 = parseInt(prompt("donner un autre nombre"));//10//
// let somme = 0;

// for (let i=n1+1 ; i< n2 ; i++){ //3+1 ; i< n2 ; i++//
//     somme = somme + i;// 0 = 0 + 4 ; 4 = 4+5 ; 9 = 9+6
//     console.log("somme à chaque tour: " + somme)

// }
// alert(somme)


// exercice 5

// let somme = 0;
// let value;
// let counter = -1;

// while(value !== 0) {1
//     value = parseInt(prompt("Entrer une valeur"));
//     somme += value; // somme = somme + value;
//     counter++; // counter = counter + 1;
// }

// const moyenne = somme / counter;
// console.log(`La somme est de : ${somme}`)
// console.log("ma moyenne est de : ", moyenne)

// exercice 6 

// let somme = 0;
// let value;
// let tab = [];

// while(value !== 0){
//     value = parseInt(prompt("Entrer une valeur"))
//     somme += value; 
//     if (value !== 0) tab.push(value);
// }

// const moyenne = somme / tab.length; // .length sur un tableau va te donner le nombre d'éléments dans ce tableau
// const min = Math.min(...tab);
// const max = Math.max(...tab);

// console.log( "ma moyennes est de : " , moyenne)
// console.log("mon plus petit est :" , min)
// console.log("mon max est de : ", max)


