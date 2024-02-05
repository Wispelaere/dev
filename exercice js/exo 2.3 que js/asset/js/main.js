const btnCalc = document.getElementById("btncalc")
btnCalc.onclick = function(){
const prixHt = +document.getElementById("PrixHT").value;
const qty = +document.getElementById("Qty").value;
let prixTTC = (prixHT * 1.2 * qty);
document.getElementById("result").innerText = prixTTC
}




const bp = true ;