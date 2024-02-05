let reponse1 = window.prompt("Saisissez votre nom");
let reponse2 = window.prompt("Saisissez votre prenom");

let message;

if (confirm("Etes vous un homme ?") == true) {
   message = "Bonjour Monsieur " + reponse1 + " " + reponse2 + "\n Bienvenue sur notre site web!";
} else {
    message = "Bonjour Madame " + reponse1 + " " + reponse2 + "\n Bienvenue sur notre site web!";
}

alert(message);
