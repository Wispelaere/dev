let isCelib = confirm("etes vous célib");
let nbEnfants = prompt("combien avez vous d'enfants ?");
let salaire = prompt("quel est votre salaire");
let tauxParticip = 0;

if (isCelib){
    tauxParticip += 0.2;

   // tauxParticip = tauxParticip + 0.20;//
}

else {
    tauxParticip += 0.25;

}
tauxParticip += nbEnfants * 0.1;
// tauxParticip = tauxParticip * nbEnfants * 0.1;//

if(salaire < 1200){
    tauxParticip = 0.1;
}

if (tauxParticip>= 0.5){
    tauxParticip = 0.5;
}

alert(
    "Le taux de participation est de " + parseFloat(tauxParticip*100) + "%"
)



