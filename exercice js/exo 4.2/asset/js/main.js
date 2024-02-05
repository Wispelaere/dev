const heures = document.getElementById("heures");
const minutes = document.getElementById("minutes");
const bouton = document.getElementById("bouton");
const resultat = document.getElementById("resultatAfficher");


function HeuresMinutes() {
    let newminutes = 1 + parseInt(minutes.value);
    let newheures = parseInt(heures.value);

    if (newminutes === 60) {
        newminutes = "00";
        newheures = (heures + 1)
    }
    if (heures == 24) {
        heures = "00"
    }
    resultat.innerHTML = "dans une minute il sera :" + newheures + "H" + newminutes
}
    bouton.addEventListener("click",HeuresMinutes);



