let scte = document.getElementById("societe");
let personContact = document.getElementById("contact");
let adress = document.getElementById("adresse");
let cP = document.getElementById("codePostal");
let city = document.getElementById("ville");
let eMail = document.getElementById("eMail");
let tel = document.getElementById("telephone");
let envProject = document.getElementById("projetTech");
let button = document.getElementById("envoyer");


// version 1 qui reinitialise a chaque input//


// button.addEventListener("click", function (event){
//     if (scte.value.length <1) {
//         alert("Veuillez mettre au moins un caractère")
//         event.preventDefault();
//     }
//     if (personContact.value.length<1) {
//         alert("Veuillez mettre au moins un caractère 01")
//         event.preventDefault();
//     }
//     if (!/^[0-9]{5}$/.value(codePostal)) {
//         alert("le code postal doit contenir exactement 5 caracteres numérique");
//         event.preventDefault();
//     }
//     if (city.value.length < 1) {
//         alert("Veuillez mettre au moins un caractère 02");
//         event.preventDefault();

//     } if (!eMail.value.includes("@")) {
//         alert("Veuillez mettre au moins un @ ");
//         event.preventDefault();
//     }
// })


//solution 2 avec l'affichage 



button.addEventListener("click", function (){
    if (scte.value.length < 1) {
        alert("Veuillez mettre au moins un caractère")
        
    }
    if (personContact.value.length < 1) {
        alert("Veuillez mettre au moins un caractère 01")
        
    }
    if (!/^[0-9]{5}$/.test(codePostal.value)) {
        alert("le code postal doit contenir exactement 5 caracteres numérique");
       
    }
    if (city.value.length <1) {
        alert("Veuillez mettre au moins un caractère 02");
        

    } if (!eMail.value.includes("@")) {
        alert("Veuillez mettre au moins un @ ");
       
    }
})

