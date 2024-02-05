const nombre1 = document.getElementById("nbre1");

const bouton = document.getElementById("bouton");

const resultat = document.getElementById("resultatAfficher");

bouton.addEventListener("click",NbreNegatifOuPositive);


function NbreNegatifOuPositive(){
let message;

if (nombre1.value>0)
{
message = "Le nombre est positive";
}


if (nombre1.value<0)
{
message = "Le nombre est négative";
}

if(nombre1.value == 0)
{
    message = "le résultat est nul "

}


resultat.innerHTML = message
}