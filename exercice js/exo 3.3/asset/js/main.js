const prenom1 = document.getElementById("prenom1");

const prenom2 = document.getElementById("prenom2");

const prenom3 = document.getElementById("prenom3");

const bouton = document.getElementById("bouton");

const resultat = document.getElementById("resultat");

bouton.addEventListener("click",OrdreAlphabetique);

function OrdreAlphabetique(){

let message;
if (prenom1.value<prenom2.value & prenom2.value<prenom3.value)
{
message = "C'est dans l'ordre ";
}
else
{
message = "Pas dans l'ordre";  
}

resultat.innerHTML=message
}