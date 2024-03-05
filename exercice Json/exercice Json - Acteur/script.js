fetch("margot-robbie.json")
    .then(
        (ressource) => ressource.json())  // on charge le fichier et des qu'il est chargé on le convertit en JSON

    .then((data) => {
        console.log(data);
        // notre fichier est converti en JSON
        // appeler par sa fonction data qui aurait pu avoir n'importe quel nom

        createActor(data);  // on rajoute a la fonction et entreparenthese le data de .then
    });
function createActor(_data) {
    let actorName = document.querySelector(".actor-name"); // on crée nos variable pour les utiliser et afficher
    let actorPicture = document.querySelector(".actor-picture");
    let actorMovies = document.querySelector(".actor-movies");


    actorName.innerHTML = _data.firstname + "" + _data.lastname;  //on lui demande d'afficher 
    actorPicture.src = _data.picture;

    let moviesList = "";
    
    for (i = 0; i < _data.movies.length; i++) {
        let movie = _data.movies[i]; 
        moviesList += "<li>" + movie.name + "|" + movie.year + "</li>";
    }
    actorMovies.innerHTML = moviesList;
}



