const heures = document.getElementById("heures");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const bouton = document.getElementById("bouton");
const resultat = document.getElementById("resultatAfficher");

function HeuresMinutesSecondes() {
  let newSecondes = parseInt(secondes.value) + 1;
  let newMinutes = parseInt(minutes.value);
  let newHeures = parseInt(heures.value);

  if (newSecondes === 60) {
    newSecondes = "00";
    newMinutes = newMinutes + 1;
  }

  if (newMinutes === 60) {
    newMinutes = "00";
    newHeures = heures + 1;
  }
  if (heures == 24) {
    heures == "00";
  }
  resultat.innerHTML =
    `dans une minute il sera :${newHeures}H${newMinutes}et${newSecondes}`;
}

bouton.addEventListener("click", HeuresMinutesSecondes);
