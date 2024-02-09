const personnages = [
  { nom: "Luke Skywalker", espece: "Humain", affiliation: "Jedi" },
  { nom: "Darth Vader", espece: "Humain", affiliation: "Sith" },
  { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi" },
  { nom: "Obi-Wan Kenobi", espece: "Humain", affiliation: "Jedi" },
  { nom: "Mia Khalifa", espece: "Catin", affiliation: "Pornhub" },
];

let numberPerso = 0;

function researchAffiliation(affiliation) {
  for (let i = 0; i < personnages.length; i++) {
    if (affiliation == personnages[i].affiliation) {
      console.log(personnages[i].nom);
    }
  }
}

function researchForTheName(name) {
  for (let i = 0; i < personnages.length; i++) {
    if (name == personnages[i].nom) {
      console.log(personnages[i]);
    }
  }
}

function calculMyArray(number) {
  for (let i = 0; i < personnages.length; i++) {
    number = personnages[i];
    numberPerso = numberPerso + 1;
  }
  console.log(
    "il y aura autant de personnages dans le tableau  " + numberPerso
  );
}

function presentPerso(name1) {
  for (let i = 0; i < personnages.length; i++) {
    if (name1 == personnages[i].nom) {
      console.log("Il est present");
    }
  }
  
}
