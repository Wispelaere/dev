const prix_ht = document.getElementById("prix_ht");

const tva = document.getElementById("tva");

const nombre_article = document.getElementById("nbre_article");

const bouton = document.getElementById("bouton");

const resultatAfficher = document.getElementById("resultat")

bouton.addEventListener("click",calculerPrixTtc);

function calculerPrixTtc(){
    let SommeHT = prix_ht.value * nombre_article.value;
    let tauxTVA = 1 + (tva.value / 100)
let prixTTC = SommeHT * tauxTVA;
resultatAfficher.innerHTML = prixTTC
}


