const bouton = document.getElementById("button");
const champ = document.getElementById("champ");
const message = document.getElementById("message");



bouton.addEventListener("click", afficherMessage);


function afficherMessage() {
    
    axios.get('https://restcountries.com/v3.1/name/'+ champ.value)
    .then(function (response) {
      // handle success
      console.log(response.data[0].name.official);
      let pays = response.data[0].name.common
      let capitale = response.data[0].capital[0]
      let population = response.data[0].population
      message.innerHTML= "Pays" + pays + "capitale" + capitale + "Population" + population
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    
}
