let number1 = prompt("saisir un nombre !");
let operateur = prompt("Opérateur?");
let number2 = prompt("saisir un deuxieme nombres !");

switch (operateur){
    case "+":
        alert(parseInt(number1) + parseInt (number2));
        break;


    case "*":
        alert(number1 * number2);
        break;


    case "-":
        alert(number1 - number2);
        break;


    case "/":
        alert(number1 / number2);
        break;

default:
    alert("Erreur");
}
