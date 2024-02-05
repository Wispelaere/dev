const clavier = document.getElementById("clavier");

const bouton = document.getElementById("bouton");

const resultat = document.getElementById("resultatAfficher")

bouton.addEventListener("click", NbreNegatifOuPositive);

function NbreNegatifOuPositive() {
    if (clavier.value > 0) {
        resultat.innerHTML = '<div class="alert alert-success mt-5" role="alert">Le nombre est positif</div>'
        clavier.value = ""
    } else {
        resultat.innerHTML = '<div class="alert alert-success mt-5" role="alert">Le nombre est négatif</div>'
        clavier.value = "";
    }
}
clavier.addEventListener("keypress", (event) => {

    if (event.code === "Enter" || event.code === "NumpadEnter") {
        NbreNegatifOuPositive();
    }
})
