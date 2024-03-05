let booksList = new Array(); // Je vais créer trois tableau pour l'affichage de mes livres pour la suite, (tableau pour les 3 questions , les listes)
let authorsList = new Array();
let categoriesList = new Array();

let options = {
    weekday: "long",
    year: "numeric",
    month: 'long',
    day: "numeric",
}

document.addEventListener("DOMContentLoaded", jSonOnLoad); // je lui demande de me charger la page grace au "DOMcontentLoaded puisque fichier trop lourd et long a afficher 
let selectAuthors = document.getElementById("listAuthors"); // je creer une variable qui sappelle selectAuthors et je lui donne sa valeur de html 
let selectCategories = document.getElementById("listCategories");
selectAuthors.addEventListener("change", ChargeByAuthor); // nouvelle evenement pour notre variable pour la selectionner dans le menu deroulant 
selectCategories.addEventListener("change", ChargeByCategory);



function jSonOnLoad() {

    // fonction a l'ouverture de ma page 
    fetch("asset/data/books.json")
        .then(response => { // une fois que notre fichier est chargé

            return response.json();
        })
        .then(booksData => {
            console.log(booksData);
            CreateList(booksData); // pour afficher la fonction sur la page (elle va construire toutes les listes)
        })

}

function CreateList(_data) {       // creer pour construire toutes mes listes
    for (let i = 0; i < _data.length; i++) {
        let book = _data[i];

        booksList.push(book); // je pousse dans ma tableau mes information qui etait sur le book
        for (let index = 0; index < book.authors.length; index++) {
            const element = book.authors[index]; // on creer un tableau pour stocker tout les auteur !! 

            if (authorsList.indexOf(element) == -1) {
                authorsList.push(element);
            }


        }


        for (let j = 0; j < book.categories.length; j++) {
            const element = book.categories[j];

            if (categoriesList.indexOf(element) == -1) {
                categoriesList.push(element);
            }
        }
        // meme chose a faire pour la catégorie



    }
    booksList.sort();
    authorsList.sort();  // je trie par ordre alphabétique
    console.log(booksList);

    for (let index = 0; index < authorsList.length; index++) {   // creer le menu option html en js donc la liste deroulante
        const element = authorsList[index];
        let option = document.createElement("option");
        option.value = element;
        option.innerText = element;
        selectAuthors.appendChild(option); // option est un enfant de selectAuthors dans HTML

    }

    for (let index = 0; index < categoriesList.length; index++) {
        const element = categoriesList[index];
        let option = document.createElement("option");
        option.value = element;
        option.innerText = element;
        selectCategories.appendChild(option);   // j'ai du recreer une variable selectCategories et lui mettre un ecouteur d'evenement.
    }
    showBooks(booksList);

}

function showBooks(_data) {  //afficher tout les livres
    let booklistElement = document.getElementById("bookList");  //je lui creer une variable local qui est la valeur de booksList
    booklistElement.innerHTML = "";  //bookList est la div = booklistElement doonc la je le met vide pour pas le copier plusieur fois ua clique du bouton



    for (let index = 0; index < _data.length; index++) {   //nouvelle boucle pour creer une div pour chaque livre
        const book = _data[index];

        let bookElement = document.createElement("div");   //creation de la div
        bookElement.setAttribute("class", "card mb-4"); // rajout de la class boostrap pour faire des card

        let titre = "";     // je lui dit que si le titre est vide pour faire mon if
        if (book.title.length > 20) {   // si le titre est plus grand que 20
            titre = book.title.substring(0, 20) + "..."   // alors il y aura des petites points 
        }
        else {
            titre = book.title // sinon ça va afficher le titre normalement 
        }

        let isbnBook = book.isbn;
        let pageBook;


        if (book.pageCount == 0 || book.pageCount == undefined) {
            pageBook = "";
        }
        else {
            pageBook = "pages -> " + book.pageCount;
        }


        let description;   //afficher la description complete
        let descriptionShort;  //afficher la descriptionrapide

        if (book.shortDescription == null || book.shortDescription == undefined) {   //on lui dit que si la descriptionrapide est absente ou null alors il sera vide
            description = "";
            descriptionShort = "";
        }
        else {   //sinon tu regarde si la description fait plus de 20caractere et si c'est le cas tu met "..."
            if (book.shortDescription.length > 20) {
                descriptionShort = book.shortDescription.substring(0, 20) + "..."; // pour celui la 
                description = book.shortDescription;
            }
            else {
                descriptionShort = book.shortDescription;  // sinon tu l'affiche normal 
                description = book.shortDescription;
            }
        } bookElement.innerHTML = "<h1>" + titre + "</h1>";  // la on la rajoute dans le document html avec un innterHTML

        let image; // on creer une variable image pour pouvoir afficher les image 

        if (book.thumbnailUrl == null || book.thumbnailUrl == undefined) {
            image = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";

        } else {   //si l'image est presente tu me l'affiche est absente tu met le liens l'image divers 
            image = book.thumbnailUrl; // ou sinon tu met l'image dans le json

        }
        bookElement.innerHTML =
            "<img src='" + image + "'/>" + "<h1>" + titre + "</h1>" +
            "<h2>" + "ISBN " + ": " + isbnBook + "</h2>" + "<h2>" + pageBook + "</h2>";  //la tu met l'image dans le html avec le titre en h1

        if (description != "") {
            bookElement.innerHTML +=
                "<h5> <span class='infobulle' title ='" +
                description +
                "'>" + descriptionShort +
                "</span> </h5>";
        }
        let datePubli;

        try {  //si j'ai une erreur je vais dire que :
            datePubli = new Date(book.publishedDate.dt_txt).toLocaleDateString( // tu va me le transformer en date local en fr 
                "fr-FR",
                options
            );
        } catch (error) {
            datePubli = "Pas de date de publication";
        }

        bookElement.innerHTML += "<h5>" + datePubli + "</h5>";


        booklistElement.appendChild(bookElement);
    }
}


function ChargeByAuthor() {
    // je creer une fonction qui va charger l'auteur que je choisis

    let strAuthor = selectAuthors.options[selectAuthors.selectedIndex].text;

    // je vais regarder dans mes option (mes liste vide creer l'onglet)
    // je me positionne sur l'index donc l'auteur dans la selection et dans les crochet je choisi mon author dans la liste 

    let booksByAuthor = new Array();

    if (strAuthor == "") {
        showBooks(booksList);

    } else {
        for (let index = 0; index < booksList.length; index++) {
            const element = booksList[index];

            if (element.authors.indexOf(strAuthor) != -1) {
                booksByAuthor.push(element);
            }
        }
        showBooks(booksByAuthor);
    }
}


function ChargeByCategory() {

    let strCategory = selectCategories.options[selectCategories.selectedIndex].text;

    let booksByCategory = new Array();

    if (strCategory == '') {
        showBooks(booksList)
    }
    else {
        for (let index = 0; index < booksList.length; index++) {
            const element = booksList[index];

            if (element.categories.indexOf(strCategory) != -1) {
                booksByCategory.push(element);
            }
        }
        showBooks(booksByCategory);
    }

}


// j'ai essayer ça !

// let alphabetArray = [];

// searchInput.addEventListener("input,", filterData);

// function filterData(e) {
//     searchResult.innerHTML = "";
//     const searchedString = e.target.value.toLowerCase();

//     const filterArr = alphabetArray.filter(el =>
//         el.authors.first.toLowerCase().includes(searchedString) ||
//         el.title.toLowerCase().includes(searchedString));

// }


function ChargeBySearch(event){
    event.preventDefault()
}



