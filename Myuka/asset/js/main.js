const button = document.getElementById("buttonScanner");
const research = document.getElementById("champ");
const message = document.getElementById("message");
const photo = document.getElementById("photoMyuka");
const ingredient = document.getElementById("imageMyuka");
const allerg = document.getElementById("allergenes");
const nova = document.getElementById("nova");
const nutriscore = document.getElementById("nutriscore");
const huile = document.getElementById("huileDePalme");
const infoPays = document.getElementById("infoPays");
const infoFooter = document.getElementById("information");
const titleCode = document.getElementById("title");




button.addEventListener("click", researchMyYuka);

function researchMyYuka() {
    axios.get('https://world.openfoodfacts.org/api/v2/product/' + research.value)
        .then(function (response) {
            let photoResearch = response.data.product.image_front_small_url;
            let allergeneResearch = response.data.product.allergens
            let ingredientResearch = response.data.product.ingredients_text
            let novaResearch = response.data.product.nova_groups
            let nutriscoreResearch = response.data.product.nutriscore_grade
            let huileResearch = response.data.product.ingredients.find(element => element.id === 'en:palm-oil');
            
            let importedResearch = response.data.product.countries_imported
            let provinceResearch = response.data.product.brand_owner_imported
            let infosResearch = "<strong>" + "Tout nos produits sont des produits certifiés par les normes de l'agro-alimentaire " + "</strong>"
            let titleResearch = response.data.product.product_name
            let codeResearch = response.data.code

            titleCode.innerHTML = "<U>" + "<h2>" + titleResearch + "</h2>"+ "</U>" + "<br>" + "<h4>" + "Code barres " + "</h4>" + codeResearch + "<br>"
            photo.innerHTML = "<img src= " + photoResearch + ">"
            allerg.innerHTML = "<U>" + "<h3>" + "Allergies : " + "</h3>" + "</U>"+ allergeneResearch
            ingredient.innerHTML = "<U>" + "<h3>" + "Ingredients : " + "</h3>" + "</U>" + "<br>" + ingredientResearch
            nova.innerHTML = "<U>" + "<h3>" + "Nova " + "</h3>" + "</U>" + novaResearch
            nutriscore.innerHTML = "<U>" + "<h3>" + "Nutriscore " + "</h3>" + "</U>" + nutriscoreResearch
            huile.innerHTML = "<U>" + "<h3>" + "Huile de Palme"  + "</h3>" + "</U>" + "<br>" + (huileResearch ? "Présente" : "Non présente");
            // huile.innerHTML= "<h3>" + "Huile de palme " + "</h3>" + huileResearch 
            infoPays.innerHTML = "<U>" + "<h3>" + "Producteur : " + "</h3>"+ "</U>" + provinceResearch + "<br>" + "<br>" + "<h5>" + "Provenance: "+ "</h5>" + importedResearch;
            infoFooter.innerHTML = infosResearch
        });

}

