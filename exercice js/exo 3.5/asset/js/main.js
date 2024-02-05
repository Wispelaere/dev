const nombre1 = document.getElementById("nbre1");

const nombre2 = document.getElementById("nbre2");

const bouton = document.getElementById("bouton");

const resultat = document.getElementById("resultatAfficher");

bouton.addEventListener("click",NbreNegatifOuPositive);

function NbreNegatifOuPositive(){
let message;

if (nombre1.value == 0 || nombre2.value == 0){

message = "le nombre est nul"
}
else if(nombre1.value<0 && nombre2<0 || nombre1.value>0 && nombre2.value>0)
{
message = "Le nombre est positive";
}
else
{
message = "Le nombre est négative";  
}

resultat.innerHTML = message
}