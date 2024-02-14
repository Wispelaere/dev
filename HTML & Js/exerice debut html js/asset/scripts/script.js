let information = document.getElementById("controle");
information.addEventListener("click", function () {
  alert("vous avez saisie " + ex.value);
});

let nbToFind = nombreAleatoireEntier();

function nombreAleatoireEntier() {
  return Math.floor(Math.random() * 101); // Math.random() génère un nombre décimal entre 0 et 1, Math.floor() arrondit ce nombre à l'entier inférieur
}

let btn = document.getElementById("verifier");
let nb = document.getElementById("ex2");
btn.addEventListener("click", function () {
  if (nb.value < nbToFind) {
    alert("il est plus petit");
  } else if (nb.value > nbToFind) {
    alert("il est plus grand");
  }
  else{
    alert("bingo");
  }
});
console.log(nbToFind);