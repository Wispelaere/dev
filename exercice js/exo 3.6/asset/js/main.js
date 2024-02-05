const age = document.getElementById("age");
const bouton = document.getElementById("bouton");
const resultat = document.getElementById("resultatAfficher")
bouton.addEventListener("click", catégorie);

function catégorie() {
    let message;

    if (age.value == 6 || age.value == 7) {
        message = "Il sera poussin !"
    }

    if (age.value == 8 || age.value == 9) {
        message = "Il sera pupille !"
    }

    if (age.value == 10 || age.value == 11) {
        message = "Il sera minime !"
    }

    if (age.value >= 12) {
        message = "Il sera cadet !"
    }

    resultat.innerHTML = message




}